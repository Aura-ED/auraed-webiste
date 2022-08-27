import { IsString } from "class-validator";

export class CreateAlbumDto {
  @IsString()
  name: string;

  @IsString({ each: true })
  images: string[];
}
