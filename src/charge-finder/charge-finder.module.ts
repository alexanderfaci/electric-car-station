import { Module } from '@nestjs/common';
import { ChargingStationsModule } from '../charging-stations/charging-stations.module'; // Adjust the path as necessary
import { UsersModule } from '../users/users.module'; // Adjust the path as necessary
import { GetClosestChargeController } from './get-closest-charge/get-closest-charge.controller';
import { GetClosestChargeUseCase } from './get-closest-charge/get-closest-charge.usecase';

@Module({
  imports: [UsersModule, ChargingStationsModule], 
  controllers: [GetClosestChargeController],
  providers: [GetClosestChargeUseCase],
})
export class ChargeFinderModule {}
