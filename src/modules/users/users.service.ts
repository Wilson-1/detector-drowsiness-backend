import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.prisma.user.create({ data: createUserDto as any });
    return user;
  }

  async findById(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({ where: { id }, data: updateUserDto as any });
  }

  async findEvents(id: number, from?: string, to?: string) {
    // Delegate to Events service in real app; use prisma directly here
    const events = await this.prisma.drowsinessEvent.findMany({
      where: {
        AND: [
          { trip: { userId: id } },
          from ? { timestamp: { gte: new Date(from) } } : {},
          to ? { timestamp: { lte: new Date(to) } } : {},
        ],
      },
      orderBy: { timestamp: 'desc' },
    });
    return events;
  }
}
