import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql'; // or another driver if not using PostgreSQL
import { Injectable } from '@nestjs/common';
import { ChargingUnitDto } from 'src/common/dtos/charging-unit.dto';
import { DistanceHelper } from 'src/common/helpers/distance.helper';
import { User } from '../entities/user.entity';

@Injectable()
export class GetClosestUsersUseCase {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>,
  ) {}

  async execute(latitude: number, longitude: number, amount: number): Promise<ChargingUnitDto[]> {
   
      const users = await this.userRepository.findAll();
      
      // Check if users were found
      if (!users || users.length === 0) {
        throw new Error('No users found in the database.');
      }

      // Calculate distances, sort by distance, and limit to the specified amount
      return users.map(user => ({
        id: user.id.toString(),
        name: user.name,
        latitude: user.latitude,
        longitude: user.longitude,
        distance: DistanceHelper.calculateDistance(
          { latitude: user.latitude, longitude: user.longitude },
          { latitude, longitude }
        )
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, amount);
    }
    
  

  // // Alternative implementation using a raw query
  // async executeAlternative(userLatitude: number, userLongitude: number): Promise<any[]> { // Adjust the return type as needed
  //   const query = `
  //     SELECT id, name, latitude, longitude,
  //     ST_DistanceSphere(
  //         ST_MakePoint(longitude, latitude),
  //         ST_MakePoint($1, $2)
  //     ) AS distance
  //     FROM user
  //     ORDER BY distance
  //     LIMIT 5;
  //   `;

  //   return this.userRepository.query(query, [userLongitude, userLatitude]);
  // }
}
