import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Acl } from './acl.entity';

@Injectable()
export class AclService extends TypeOrmCrudService<Acl> {
    constructor(@InjectRepository(Acl) repo: Repository<Acl>) {
        super(repo);
      }

}
