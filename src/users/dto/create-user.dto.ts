import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'Ars'})
    @IsNotEmpty()
    readonly username: string;

    @ApiProperty({example: 'Ars123'})
    @IsNotEmpty()
    readonly password: string;

    @ApiProperty({example: 'Ars@gmail.com'})
    @IsNotEmpty()
    readonly email: string;
    
}