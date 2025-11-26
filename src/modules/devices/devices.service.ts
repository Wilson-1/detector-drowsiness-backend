import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateDeviceDto } from './dto/create-device.dto';

@Injectable()
export class DevicesService {
  constructor(private prisma: PrismaService) {}

  async findStatus(deviceId: number) {
    const device = await this.prisma.device.findUnique({ where: { id: deviceId } });
    if (!device) throw new NotFoundException('Device not found');

    // Basic status: last trip and createdAt
    const lastTrip = await this.prisma.trip.findFirst({
      where: { deviceId },
      orderBy: { startedAt: 'desc' },
    });

    return {
      device,
      lastTrip,
    };
  }

  async create(createDeviceDto: CreateDeviceDto) {
    const created = await this.prisma.device.create({ data: createDeviceDto as any });
    return created;
  }
}
