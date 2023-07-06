import { Body, Controller, Header, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LocalAuthGuard } from 'src/auth/local.auth.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('/signup')
    @HttpCode(HttpStatus.CREATED)
    @Header('Contebt-type', 'application/json')
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto)
    }

    @Post('/sigloginnup')
    @UseGuards(LocalAuthGuard)
    @HttpCode(HttpStatus.OK)
    login(@Request() req) {
        return {user: req.user, msg: 'Logged in'};
    }
}
