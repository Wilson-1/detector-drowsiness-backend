import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { TripsService } from './trips.service';
import { CreateTripDto } from './dto/create-trip.dto';
import { EndTripDto } from './dto/end-trip.dto';
import { CreateEventDto } from '../events/dto/create-event.dto';

@Controller('trips')
export class TripsController {
  constructor(private readonly tripsService: TripsService) {}

  @Post()
  async create(@Body() createTripDto: CreateTripDto) {
    return this.tripsService.create(createTripDto);
  }

  @Put(':id/end')
  async end(@Param('id') id: string, @Body() endTripDto: EndTripDto) {
    return this.tripsService.end(Number(id), endTripDto?.endedAt);
  }

  @Post(':id/events')
  async addEvent(@Param('id') id: string, @Body() createEventDto: CreateEventDto) {
    // ensure tripId in payload matches param
    createEventDto.tripId = Number(id);
    return this.tripsService.addEvent(Number(id), createEventDto as any);
  }
}
