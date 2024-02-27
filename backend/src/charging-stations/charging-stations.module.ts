import { MikroOrmModule } from '@mikro-orm/nestjs';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ChargingStation } from './entities/charging-station.entity';
import { GetClosestChargingStationsController } from './get-closest-charging-stations/get-closest-charging-stations.controller';
import { GetClosestChargingStationsUseCase } from './get-closest-charging-stations/get-closest-charging-stations.usecase';
import { OpenChargeMapApiHelper } from './helpers/open-charge-map-api.helper';

@Module({
  imports: [
    MikroOrmModule.forFeature([ChargingStation]),
    HttpModule
  ],
  controllers: [GetClosestChargingStationsController],
  providers: [
    GetClosestChargingStationsUseCase,
    OpenChargeMapApiHelper,
  ],
  exports: [GetClosestChargingStationsUseCase],
})
export class ChargingStationsModule {}
