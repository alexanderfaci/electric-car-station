import { Controller, Get, Query } from '@nestjs/common';
import { ChargingUnitDto } from 'src/common/dtos/charging-unit.dto';
import { ProximitySearchDto } from 'src/common/dtos/proximity-search.dto';
import { GetClosestChargeUseCase } from './get-closest-charge.usecase';

@Controller('charge-finder')
export class GetClosestChargeController {
  constructor(private readonly getClosestChargeUseCase: GetClosestChargeUseCase) {}

  @Get('/closest')
  getClosestCharge(@Query() searchDto: ProximitySearchDto): Promise<ChargingUnitDto[]> {
    return this.getClosestChargeUseCase.execute(searchDto.latitude, searchDto.longitude, searchDto.amount);
  }
}
