import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/interfaces/user.interface';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}
    @Get()
    async findAll(): Promise<User[]> {
        return this.userService.findAll();
    }
}
