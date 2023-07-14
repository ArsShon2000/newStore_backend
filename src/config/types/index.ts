import { ApiProperty } from "@nestjs/swagger";


class ShoppingCartItem  {
    @ApiProperty ({ example: 1 })
    id: number;

    @ApiProperty({ example: 'Aliquid alias.' })
    name: string;

    @ApiProperty({ example: 2500 })
    price: number;

    @ApiProperty({ example: 'https://loremflickr.com/640/480/technics?lock=6989745678712832?random=923069354345567017553645839373' })
    image: string;

    @ApiProperty({ example: 5 })
    in_stock: number;
    
    @ApiProperty({ example: 'Salmon' })
    parts_manufacturer: string;

    @ApiProperty({ example: 'Henry' })
    boiler_manufacturer: string;

    @ApiProperty({ example: 1 })
    userId: number;

    @ApiProperty({ example: 1 })
    partId: number;

    @ApiProperty({ example: 3 })
    count: number;

    @ApiProperty({ example: 3 })
    total_price: number;

    @ApiProperty({ example: '2023-07-14T05:07:59.000Z' })
    createdAt: string;

    @ApiProperty({ example: '2023-07-14T05:07:59.000Z' })
    updatedAt: string;
}