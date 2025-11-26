import { IsInt, IsISO8601, IsOptional } from 'class-validator';

export class CreateTripDto {
  @IsInt()
  deviceId: number;

  @IsOptional()
  @IsInt()
  userId?: number;

  @IsISO8601()
  startedAt: string;
}
