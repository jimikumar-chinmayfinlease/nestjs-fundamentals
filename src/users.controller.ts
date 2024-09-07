import { Body, Controller, Get, NotFoundException, Param, Post } from "@nestjs/common";
import { CreateUserDto } from "./create-user.dto";

@Controller('users')
export class UsersController {
    @Get()
    findAll(): string {
        return 'This will return a list of all users.';
    }

    @Get(':id')
    findOne(@Param('id') id: string): string {
        if(id !== '1') {
            throw new NotFoundException(`User with id ${id} not found.`);
        }
        return `User found with id: ${id}`;
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto): string {
        return `This will create a new user with name: ${createUserDto.name}`;
    }
}