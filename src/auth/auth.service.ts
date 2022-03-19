import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '@users/entities/user.entity';
import { UsersService } from '@users/users.service';
import { LoginResponse } from './dto/login-response';
// import { LoginUserInput } from './dto/login-user.input';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: UserEntity): Promise<LoginResponse> {
    // const user = await this.usersService.findOneByEmail(loginUserInput.email);
    return {
      token: this.jwtService.sign({ email: user.email, sub: user.id }),
      user,
    };
  }
}
