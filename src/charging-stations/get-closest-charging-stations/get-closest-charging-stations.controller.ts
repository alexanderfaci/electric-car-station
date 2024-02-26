import { Controller, Get, Query } from '@nestjs/common';
import { ProximitySearchDto } from 'src/common/dtos/proximity-search.dto';
import { GetClosestChargingStationsUseCase } from './get-closest-charging-stations.usecase';

@Controller('charging-stations')
export class GetClosestChargingStationsController {
  constructor(private readonly getClosestChargingStationsUseCase: GetClosestChargingStationsUseCase) {}

  @Get('/closest')
  getClosestChargingStations(@Query() searchDto: ProximitySearchDto) {
    return this.getClosestChargingStationsUseCase.execute(searchDto.latitude, searchDto.longitude, searchDto.amount);
  }
}
