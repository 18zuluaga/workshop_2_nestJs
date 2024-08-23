
import { ProductOrder } from "src/product-order/entities/product-order.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column() 
    description: string;

    @OneToMany(() => ProductOrder, (productOrder) => productOrder.product) 
    productOrder: ProductOrder[]
}
