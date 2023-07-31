import { IsBoolean, IsString, IsUrl, Length } from "class-validator";

export class CreateBlogDto {
  @IsString()
  @Length(5, 255)
  title: string;

  @IsString()
  @Length(5, 50)
  author: string;

  @IsString()
  @Length(50, 255)
  description: string;

  @IsUrl()
  blogUrl: string;

  @IsString()
  thumbnail: string;

  @IsBoolean()
  pinned: boolean;
}

export class UpdateBlogDto implements Partial<CreateBlogDto> { }
