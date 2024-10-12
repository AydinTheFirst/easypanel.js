import { IsBoolean, IsEmail, IsString } from "class-validator";

export class GetStatusInput {}

export class SetupInput {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsBoolean()
  subscribe: boolean;

  @IsString()
  source: string;

  @IsBoolean()
  terms: boolean;
}
