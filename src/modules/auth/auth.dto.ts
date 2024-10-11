import { IsBoolean, IsEmail, IsOptional, IsString } from "class-validator";

export class GetUserInput {}

export class GetSessionInput {}

export class LoginInput {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsBoolean()
  @IsOptional()
  rememberMe?: boolean;

  @IsString()
  @IsOptional()
  code?: string;
}

export class LogoutInput {}
