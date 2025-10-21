import { UsersService } from './users.service';
import { User } from 'src/interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    findAll(): Promise<User[]>;
    create(userDto: CreateUserDto): Promise<User>;
}
