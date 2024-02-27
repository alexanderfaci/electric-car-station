import { IsString } from 'class-validator';
import { CoordinatesDto } from 'src/common/dtos/coordinates.dto';


export class CreateUserDto extends CoordinatesDto {
  
  @IsString()
  name: string;
}
