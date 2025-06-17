import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsArray, IsDate } from 'class-validator';

export class CreatePersonDto {
  @ApiProperty({ description: 'Name of the person' })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Birth date of the person',
    type: Date,
    format: 'date',
  })
  birthDate: Date;

  @ApiProperty({
    description: 'Gender of the person',
    enum: ['male', 'female', 'other'],
  })
  gender: 'male' | 'female' | 'other';

  companyId: string;
}
