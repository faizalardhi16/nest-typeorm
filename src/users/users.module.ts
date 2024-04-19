import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { userProvider } from './users.provider';
@Module({
  controllers: [UsersController],
  providers: [
    ...userProvider,
    UsersService
  ]
})
export class UsersModule {}
