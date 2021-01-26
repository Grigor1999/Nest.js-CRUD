import { Injectable } from '@nestjs/common';
import { Repository} from 'typeorm';
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { User } from './user.entity';

@Injectable()
export class UserService extends TypeOrmCrudService<User> {
    constructor(@InjectRepository(User) userRepository: Repository<User>) {
        super(userRepository);
      }

}
