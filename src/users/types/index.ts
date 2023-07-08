import { ApiProperty } from '@nestjs/swagger';

export class LoginUserRequest {
    @ApiProperty({ example: 'Ars' })
    username: string;

    @ApiProperty({ example: 'Ars123' })
    password: string
}

export class LoginUserResponse {
    @ApiProperty({
        example: {
            user: {
                userId: 1,
                username: 'Ars',
                email: 'Ars@gmail.com',
            },
        },
    })
    user: {
        userId: number;
        username: string;
        email: string;
    };

    @ApiProperty({ example: 'Logged in' })
    msg: string
}

export class LogoutUserResponse {
    @ApiProperty({ example: 'Session has ended' })
    msg: string;
}

export class LoginCheckUserResponse {
    @ApiProperty({ example: 1 })
    userId: number;

    @ApiProperty({ example: 'Ars' })
    username: string;

    @ApiProperty({ example: 'Ars@gmail.com' })
    email: string
}

export class SignUpResponse {
    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({ example: 'Ars' })
    username: string;

    @ApiProperty({ example: '$1mvd7VMki72jOMVo58dmvop.kdvk5mdVMd54mv5kdmv8m3KMDvkdmv93mD.mvdjvidv' })
    password: string;

    @ApiProperty({ example: 'Ars@gmail.com' })
    email: string

    @ApiProperty({ example: '2023-07-06T02:38:01' })
    createdAt: string

    @ApiProperty({ example: '2023-07-06T02:38:01' })
    updatedAt: string
}