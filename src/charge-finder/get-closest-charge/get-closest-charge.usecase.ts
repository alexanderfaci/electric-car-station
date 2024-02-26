import { Injectable } from '@nestjs/common';
import { ChargingUnitDto } from 'src/common/dtos/charging-unit.dto';
import { GetClosestUsersUseCase } from 'src/users/get-closest-users/get-closest-users.usecase';
import { GetClosestChargingStationsUseCase } from '../../charging-stations/get-closest-charging-stations/get-closest-charging-stations.usecase';

@Injectable()
export class GetClosestChargeUseCase {
  constructor(
    private closestUsersUseCase: GetClosestUsersUseCase,
    private closestStationsUseCase: GetClosestChargingStationsUseCase
  ) {}

  async execute(latitude: number, longitude: number,amount:number): Promise<ChargingUnitDto[]> {
    const users = await this.closestUsersUseCase.execute(latitude, longitude, amount);
    const stations = await this.closestStationsUseCase.execute(latitude, longitude, amount);

    // Combine, sort by proximity, and select the top results
    const combined = [...users, ...stations].sort((a, b) => a.distance - b.distance);
    return combined.slice(0, amount);
  }
}
