import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './users.controller';
import {UserService} from "./user.service";

describe('UsersController', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();
    service = module.get<UserService>(UserService);
    controller = module.get<UserController>(UserController);
  });
  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = ['test'];
      // jest.spyOn(service, 'findAll').mockImplementation(() => result);

      // expect(await controller.findAll()).toBe(result);
    });
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
