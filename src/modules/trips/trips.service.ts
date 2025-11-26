import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTripDto } from './dto/create-trip.dto';

@Injectable()
export class TripsService {
  constructor(private prisma: PrismaService) {}

  async create(createTripDto: CreateTripDto) {
    const { deviceId, userId, startedAt } = createTripDto;
    const trip = await this.prisma.trip.create({
      data: {
        deviceId,
        userId,
        startedAt: new Date(startedAt),
      },
    });
    return trip;
  }

  async end(tripId: number, endedAt?: string) {
    const trip = await this.prisma.trip.findUnique({ where: { id: tripId } });
    if (!trip) throw new NotFoundException('Trip not found');

    const updated = await this.prisma.trip.update({
      where: { id: tripId },
      data: {
        endedAt: endedAt ? new Date(endedAt) : new Date(),
      },
    });

    return updated;
  }

  async addEvent(tripId: number, eventData: any) {
    // eventData should be validated by controller
    const created = await this.prisma.drowsinessEvent.create({ data: eventData });
    return created;
  }
}
