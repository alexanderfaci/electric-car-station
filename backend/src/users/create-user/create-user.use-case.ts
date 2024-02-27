import { EntityManager } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly em: EntityManager
  ) {}

  async execute(createUserDto: CreateUserDto): Promise<User> {
    // Create a new user instance from the DTO
    const user = this.em.create(User, createUserDto);

    // Persist the new user to the database and flush changes
    await this.em.persistAndFlush(user);

    return user;
  }
}
