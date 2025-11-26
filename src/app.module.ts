import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { DevicesModule } from './modules/devices/devices.module';
import { TripsModule } from './modules/trips/trips.module';
import { EventsModule } from './modules/events/events.module';

@Module({
  imports: [AuthModule, UsersModule, DevicesModule, TripsModule, EventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
