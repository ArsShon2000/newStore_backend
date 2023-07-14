import { Column, Table, Model } from "sequelize-typescript";

@Table
export class ShoppingCart extends Model {
    @Column
    userId: string;

    @Column({ defaultValue: 0 })
    partId: number;
    @Column

    boiler_manufacturer: string;

    @Column({ defaultValue: 0 })
    price: number;

    @Column
    parts_manufacturer: string;

    @Column
    name: string;

    @Column
    image: string;

    @Column({ defaultValue: 0 })
    in_stock: number;                           // КОЛ ТОВАРОВ НА СКЛАДЕ

    @Column({ defaultValue: 0 })
    count: number;                              // КОЛ ТОВАРОВ В КОРЗИНЕ

    @Column({ defaultValue: 0 })
    total_price: number;                        // ИТОГОВАЯ ЦЕНА
}