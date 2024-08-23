import { Order } from "src/order/entities/order.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column() 
    rol: string;

    @OneToMany(() => Order, (order) => order.user) 
    order: Order[]
}