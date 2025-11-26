import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { CreateDeviceDto } from './dto/create-device.dto';

@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Get(':id/status')
  async status(@Param('id') id: string) {
    return this.devicesService.findStatus(Number(id));
  }

  @Post()
  async create(@Body() createDeviceDto: CreateDeviceDto) {
    return this.devicesService.create(createDeviceDto);
  }
}
