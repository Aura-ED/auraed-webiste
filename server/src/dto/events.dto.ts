import { IsDate, IsNotEmpty, IsString, IsUrl, Length } from "class-validator";

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  @Length(5, 255)
  title: string;

  @IsString()
  @IsNotEmpty()
  @Length(5, 255)
  location: string;

  @IsString()
  @IsNotEmpty()
  @Length(5, 255)
  description: string;

  @IsUrl()
  url: string;

  @IsString({ each: true })
  images: string[];

  @IsDate()
  startDate: Date;

  @IsDate()
  endDate: Date;
}

export class UpdateEventDto implements Partial<CreateEventDto> {
  title?: string;
  location?: string;
  description?: string;
  url?: string;
  images?: string[];
  startDate?: Date;
  endDate?: Date;
}
