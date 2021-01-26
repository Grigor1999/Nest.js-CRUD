import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) { }

    async validateUser(name: string, pass: string): Promise<any> {
        const user = await this.userService.findOne({ name })
        if (user && bcrypt.compareSync(pass, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
    async login(user: any) {
        const payload = { id: user.id, name: user.name,type: 'user',};
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}