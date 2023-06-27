import { IsNotEmpty, IsString, IsOptional } from "class-validator";
export class createUserDTO {
    @IsNotEmpty()
    @IsString()
    email:string;
    @IsNotEmpty()
    @IsString()
    password:string;
    @IsString()
    @IsNotEmpty()
    name:string;
    @IsString()
    @IsNotEmpty()
    lastName:string;
    @IsString()
    @IsOptional()
    sLastName:string;
    @IsString()
    @IsNotEmpty()
    gender:string;
}

export class updateUserDTO {
    @IsOptional()
    @IsString()
    email:string;
    @IsOptional()
    @IsString()
    password:string;
    @IsString()
    @IsOptional()
    name:string;
    @IsString()
    @IsOptional()
    lastName:string;
    @IsString()
    @IsOptional()
    sLastName:string;
    @IsString()
    @IsOptional()
    gender:string;
}