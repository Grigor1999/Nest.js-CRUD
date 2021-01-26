import { User } from './user.entity';

describe('Users', () => {
  it('should be defined', () => {
    expect(new User()).toBeDefined();
  });
});
