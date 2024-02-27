import { Type } from 'class-transformer';
import { IsNumber, IsOptional, Max, Min } from 'class-validator';
import { CoordinatesDto } from './coordinates.dto';

export class ProximitySearchDto extends CoordinatesDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: 'Amount must be a number' })
  @Min(1, { message: 'Amount must be at least 1' })
  @Max(10, { message: 'Amount must not exceed 10' })
  amount: number = 5;
}
