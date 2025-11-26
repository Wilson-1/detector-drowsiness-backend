import { IsISO8601, IsOptional } from 'class-validator';

export class EndTripDto {
  @IsOptional()
  @IsISO8601()
  endedAt?: string;
}
