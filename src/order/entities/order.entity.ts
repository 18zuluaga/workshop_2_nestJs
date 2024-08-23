import { ProductOrder } from "src/product-order/entities/product-order.entity";
import { User } from "src/user/entities/user.entity";
import { Column, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export class Order {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column()
    totalPrice: number;

    @OneToMany(() => ProductOrder, (productOrder) => productOrder.order) 
    productOrder: ProductOrder[]

    @ManyToOne(() => User, (user) => user.order)
    @JoinColumn({name: 'product_id'})
    user: User
}
