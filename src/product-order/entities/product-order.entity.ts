import { Order } from "src/order/entities/order.entity";
import { Product } from "src/product/entities/product.entity";
import { JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class ProductOrder {
    @PrimaryGeneratedColumn() 
    id: number;

    @ManyToOne(() => Product, (product) => product.productOrder)
    @JoinColumn({name: 'product_id'})
    product: Product

    @ManyToOne(() => Order, (order) => order.productOrder)
    @JoinColumn({name: 'order_id'})
    order: Order
}
