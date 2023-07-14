import { Controller, UseGuards } from '@nestjs/common';
import { ShoppingCartService } from './shopping-cart.service';
import { Body, Get, Param, Post } from '@nestjs/common/decorators';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { AddToCartDto } from './dto/add-to-cart.dto';

@Controller('shopping-cart')
export class ShoppingCartController {
    constructor(private readonly shoppingCartService: ShoppingCartService) {}

    @UseGuards(AuthenticatedGuard)
    @Get(':id')
    getAll(@Param('id') userId: string) {
        return this.shoppingCartService.findAll(userId);
    }

    @UseGuards(AuthenticatedGuard)
    @Post('/add')
    addToCart(@Body() addToCartDto: AddToCartDto) {
        return this.shoppingCartService.add(addToCartDto);
    }

    @UseGuards(AuthenticatedGuard)
    @Post('/count/:id')
    updateCount(
        @Body() { count }: { count: number },
        @Param('id') partId: string,
    ) {
        return this.shoppingCartService.updateCount(count, partId);
    }
}