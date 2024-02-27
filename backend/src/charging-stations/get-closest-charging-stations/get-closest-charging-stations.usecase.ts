// In get-closest-charging-stations.usecase.ts
import { Injectable } from '@nestjs/common';
import { ChargingUnitDto } from 'src/common/dtos/charging-unit.dto';
import { OpenChargeMapApiHelper } from '../helpers/open-charge-map-api.helper';

@Injectable()
export class GetClosestChargingStationsUseCase {
  constructor(private openChargeMapApiHelper: OpenChargeMapApiHelper) {}

  async execute(latitude: number, longitude: number, amount:number): Promise<ChargingUnitDto[]> {
    return this.openChargeMapApiHelper.getChargingStations(latitude, longitude, amount);
  }
}
