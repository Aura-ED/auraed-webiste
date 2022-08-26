import { IsDateString, IsString, IsUrl, Length } from "class-validator";

export class CreateEventDto {
  @IsString()
  @Length(5, 255)
  title: string;

  @IsString()
  @Length(5, 255)
  location: string;

  @IsString()
  @Length(5, 255)
  description: string;

  @IsUrl()
  url: string;

  @IsString({ each: true })
  images: string[];

  @IsDateString()
  startDate: Date;

  @IsDateString()
  endDate: Date;
}

export class UpdateEventDto implements Partial<CreateEventDto> {}
