import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';
import { AclController } from './acl/acl.controller';
import { Acl } from './acl/acl.entity';
import { AclService } from './acl/acl.service';

@Module({
  imports:[TypeOrmModule.forFeature([Acl]), AuthModule ],
  controllers: [AclController],
  providers: [AclService],
  exports: [AclService],
})
export class AclModule {}
