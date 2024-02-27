// src/users/users.module.ts
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { CreateUserController } from './create-user/create-user.controller';
import { CreateUserUseCase } from './create-user/create-user.use-case';
import { User } from './entities/user.entity';
import { GetClosestUsersController } from './get-closest-users/get-closest-users.controller';
import { GetClosestUsersUseCase } from './get-closest-users/get-closest-users.usecase';

@Module({
  imports: [
    MikroOrmModule.forFeature([User]), // Register the User entity with MikroORM
  ],
  providers: [
    GetClosestUsersUseCase,
    CreateUserUseCase
  ],
  controllers: [
    GetClosestUsersController,
    CreateUserController
  ],
  exports: [GetClosestUsersUseCase],
})
export class UsersModule {}
