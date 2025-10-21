import { UsersService } from './users.service';
import { User } from 'src/interfaces/user.interface';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    findAll(): Promise<User[]>;
}
