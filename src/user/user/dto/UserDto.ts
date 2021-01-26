import { ApiProperty } from '@nestjs/swagger';
export interface UserDto {
  name: string,
  email: string,
  password: string
}
export class PostUsersRequestDto {
  @ApiProperty()
  username!: string;

  @ApiProperty()
  password!: string;
}
