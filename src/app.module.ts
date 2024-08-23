import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { ProductOrderModule } from './product-order/product-order.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ 
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "Rlwl2023.",
      database: "ecommercer",
      entities: [User],
      synchronize: true
    }),
    UserModule,
    AuthModule,
    ProductModule,
    OrderModule,
    ProductOrderModule],
})
export class AppModule {}
