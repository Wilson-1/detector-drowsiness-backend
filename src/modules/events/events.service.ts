import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class EventsService {
  constructor(private prisma: PrismaService) {}

  async create(eventData: any) {
    return this.prisma.drowsinessEvent.create({ data: eventData });
  }

  async findByUser(userId: number, from?: string, to?: string) {
    const where: any = { trip: { userId } };

    // Prisma requires filtering on fields of related models via some includes/joins; simpler approach: fetch events where trip.userId = userId
      const events = await this.prisma.drowsinessEvent.findMany({
      where: {
        AND: [
          { trip: { userId } },
          from ? { timestamp: { gte: new Date(from) } } : {},
          to ? { timestamp: { lte: new Date(to) } } : {},
        ],
      },
      orderBy: { timestamp: 'desc' },
    });

    return events;
  }
}
