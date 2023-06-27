import { Controller, Delete, Get, Post, Put, Body, Param, } from '@nestjs/common';
import { UsersService } from "./users.service";
import { UserEntity } from './entities/user.entity';
import { createUserDTO, updateUserDTO } from './dto/User.dto';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

    @Get()
    getUsers(): Promise<UserEntity[]> {
        return this.userService.getUsers();
    }
    @Get(':id')
    getUser(@Param('id') id: string): Promise<UserEntity> {
        return this.userService.getUser(id);
    }

    @Post('register')
    createUser(@Body() user: createUserDTO): Promise<UserEntity> {
        return this.userService.createUser((user))
    }

    @Put('edit/:id')
    updateUser(@Body() user: updateUserDTO, @Param('id') id: string): Promise<UpdateResult> {
        return this.userService.updateUser(user, id);
    }

    @Delete('delete/:id')
    deleteUser(@Param('id') id: string): Promise<DeleteResult> {
        return this.userService.deleteUser(id);
    }


}
