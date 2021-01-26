import { Acl } from './acl.entity';
import { AclService } from './acl.service';
import { AuthGuard } from '@nestjs/passport';
import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { AuthService } from '../../auth/auth.service';
import { ApiBearerAuth, ApiBody, ApiHeader, ApiParam, ApiProduces } from '@nestjs/swagger';
import { LocalAuthGuard } from '../../auth/local-auth.guard';
import { PostUsersRequestDto } from '../../user/user/dto/UserDto';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

@Crud({
    model: {
        type: Acl,
    },
    params: {
        aclId: {
            field: 'id',
            type: 'string',
            primary: true,
        },
    },
    routes: {
        exclude: ['createManyBase'],
    },
})

@UseGuards(JwtAuthGuard)
@Controller('acl')
export class AclController implements CrudController<Acl> {
    constructor(public service: AclService, private authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    @ApiBody({ type: PostUsersRequestDto })
    async login(@Request() req: any) {
        return this.authService.login(req.user);    // const { email, password } = request.body.user;
    }

    @Get('me')
    @ApiBearerAuth('JWT')
    check(@Request() req: any,) {
        return req.user;
    }
}
