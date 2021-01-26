import { asResponse, DataResponse, getResponseFor } from '../../lib/data-response';

import { Role } from './role.entity';
import { RoleService } from './role.service';

import { ApiResponse } from '@nestjs/swagger';
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import {
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
@Crud({
  model: {
    type: Role,
  },
  params: {
    roleId: {
      field: 'id',
      type: 'string',
      primary: true,
    },
  },
  routes: {
    exclude: ['createManyBase'],
  },
})
@Controller('role')
export class RoleController implements CrudController<Role> {
  constructor(public service: RoleService) {}
}
