import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { Body } from '@nestjs/common';
import { CreateUserDto } from './dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id/events')
  async events(
    @Param('id') id: string,
    @Query('from') from?: string,
    @Query('to') to?: string,
  ) {
    return this.usersService.findEvents(Number(id), from, to);
  }

    @Post()
    async create(@Body() createUser: CreateUserDto) {
      return this.usersService.create(createUser);
    }

}
