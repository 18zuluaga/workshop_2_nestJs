import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LoginAuthDto } from './dto/sing-in-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: LoginAuthDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @Post('register')
  signUp(@Body() signUpDto: CreateUserDto) {
    return this.authService.register(signUpDto.email, signUpDto.password, signUpDto.rol);
  }
}
