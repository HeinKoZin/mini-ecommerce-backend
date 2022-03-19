import { Injectable } from '@nestjs/common';
import { UserEntity } from '@users/entities/user.entity';
import { UsersService } from '@users/users.service';
import { LoginResponse } from './dto/login-response';
// import { LoginUserInput } from './dto/login-user.input';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

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
      token: 'fake-token',
      user,
    };
  }
}
