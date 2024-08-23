import { Injectable, UnauthorizedException } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(username);
    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) {   
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, userEmail: user.email, rol: user.rol };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register( email: string, password: string, rol: string) {
  const user = await this.usersService.findOne(email);
  if (user) {
    throw new Error('User already exists');
  }
  const saltOrRounds = 10;
  const hash = await bcrypt.hash(password, saltOrRounds);
  return await this.usersService.create({ email, password:hash, rol });
  }
}