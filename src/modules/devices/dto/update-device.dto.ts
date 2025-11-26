import { IsOptional, IsString } from 'class-validator';

export class UpdateDeviceDto {
  @IsOptional()
  @IsString()
  model?: string;

  @IsOptional()
  @IsString()
  firmwareVersion?: string;

  @IsOptional()
  userId?: number;
}
