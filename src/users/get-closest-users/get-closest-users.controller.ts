import { Controller, Get, Query } from '@nestjs/common';
import { ProximitySearchDto } from 'src/common/dtos/proximity-search.dto';
import { GetClosestUsersUseCase } from './get-closest-users.usecase';

@Controller('users')
export class GetClosestUsersController {
  constructor(private readonly getClosestUsersUseCase: GetClosestUsersUseCase) {}

  @Get('/closest')
  getClosestChargingStations(@Query() searchDto: ProximitySearchDto) {
    return this.getClosestUsersUseCase.execute(searchDto.latitude, searchDto.longitude, searchDto.amount);
  }
}
