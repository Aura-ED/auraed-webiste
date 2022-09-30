import {
  IsString,
  IsNumber,
  Length,
  IsDateString,
  IsPositive,
} from 'class-validator';

export class CreateMetaDto {
  @IsString()
  @Length(5, 255)
  id: string;

  @IsString()
  @IsNumber()
  @IsPositive()
  places: string;

  @IsString()
  @IsNumber()
  @IsPositive()
  reach: string;

  @IsString()
  @IsNumber()
  @IsPositive()
  events: string;
}

export class UpdateMetaDto implements Partial<CreateMetaDto> {}
