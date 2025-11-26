import { IsOptional, IsString } from 'class-validator';

export class CreateDeviceDto {
  @IsString()
  deviceUuid: string;

  @IsOptional()
  @IsString()
  model?: string;

  @IsOptional()
  @IsString()
  firmwareVersion?: string;

  @IsOptional()
  userId?: number;
}
