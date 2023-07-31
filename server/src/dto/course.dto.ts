import { IsString, IsUrl, Length } from "class-validator";

export class CreateCourseDto {
  @IsString()
  @Length(5, 255)
  title: string;

  @IsString()
  @Length(50, 255)
  description: string;

  @IsString()
  thumbnail: string;

  @IsString()
  pdf: string;

  @IsUrl()
  youtubeLink: string;
}

export class UpdateCourseDto implements Partial<CreateCourseDto> { }
