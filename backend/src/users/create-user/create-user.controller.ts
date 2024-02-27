import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from '../entities/user.entity';
import { CreateUserUseCase } from './create-user.use-case';

@Controller('users')
export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  addUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.createUserUseCase.execute(createUserDto);
  }
}
