import { IsEmail, IsString, Length } from "class-validator";

export class LoginDto {
  @IsEmail()
  email: string;

  @IsString({ message: "Password must be a string" })
  @Length(8, 50, {
    message: "Password must be at least 8 characters and max 50 characters",
  })
  password: string;
}

export class SignupDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString({ message: "Password must be a string" })
  @Length(8, 50, {
    message: "Password must be at least 8 characters and max 50 characters",
  })
  password: string;
}

export class RefreshTokenDto {
  @IsString()
  refreshToken: string;
}
