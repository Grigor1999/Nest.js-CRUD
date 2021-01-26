import { User } from './user.entity';
import { UserService } from './user.service';

import { Controller, Get, Post } from '@nestjs/common';
import { Crud, CrudAuth, CrudController } from '@nestjsx/crud';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Crud({
  model: {
    type: User,
  },
  params: {
    userId: {
      field: 'id',
      type: 'string',
      primary: true,
    },
  },
  routes: {
    exclude: ['createManyBase'],
  },
})

@Controller('users')
export class UserController implements CrudController<User> {
  constructor(public service: UserService) {}
}
