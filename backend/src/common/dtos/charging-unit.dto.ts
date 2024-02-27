
import { IsNumber, IsString, IsUUID } from 'class-validator';
import { CoordinatesDto } from './coordinates.dto';

export class ChargingUnitDto extends CoordinatesDto {
  @IsString()
  name: string;

  @IsUUID()
  id: string;

  @IsNumber()
  distance: number; // Distance from the provided coordinates
}
