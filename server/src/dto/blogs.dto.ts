import {
  IsBoolean,
  IsNotEmpty,
  IsString,
  IsUrl,
  Length,
} from "class-validator";

export class CreateBlogDto {
  @IsString()
  @IsNotEmpty()
  @Length(5, 255)
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  @Length(5, 50)
  author: string;

  @IsString()
  @IsNotEmpty()
  @Length(50, 255)
  description: string;

  @IsUrl()
  blogUrl: string;

  @IsUrl()
  thumbnailUrl: string;

  @IsBoolean()
  pinned?: boolean;
}

export class UpdateBlogDto implements Partial<CreateBlogDto> {
  title?: string;
  content?: string;
  author?: string;
  description?: string;
  blogUrl?: string;
  thumbnailUrl?: string;
  pinned?: boolean;
}
