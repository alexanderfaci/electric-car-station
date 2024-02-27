import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import mikroOrmConfig from 'mikro-orm.config';
import { ChargeFinderModule } from './charge-finder/charge-finder.module';
import { ChargingStationsModule } from './charging-stations/charging-stations.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MikroOrmModule.forRoot(mikroOrmConfig),
    UsersModule,
    ChargingStationsModule,
    ChargeFinderModule,
    
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
