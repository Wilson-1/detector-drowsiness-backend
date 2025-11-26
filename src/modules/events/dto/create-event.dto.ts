import { IsBoolean, IsInt, IsISO8601, IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateEventDto {
  @IsInt()
  tripId: number;

  @IsInt()
  deviceId: number;

  @IsISO8601()
  timestamp: string;

  @IsString()
  type: string;

  @IsString()
  severity: string;

  @IsNumber()
  score: number;

  @IsOptional()
  @IsNumber()
  eyeDuration?: number;

  @IsOptional()
  @IsNumber()
  headTilt?: number;

  @IsOptional()
  @IsInt()
  bpm?: number;

  @IsOptional()
  @IsBoolean()
  imuFlag?: boolean;
}
