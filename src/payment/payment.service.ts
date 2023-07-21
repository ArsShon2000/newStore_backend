import { ForbiddenException, Injectable } from '@nestjs/common';
import { MakePaymentDto } from './dto/make-payment.dto';
import axios from 'axios';

@Injectable()
export class PaymentService {
    async makePayment(makePaymentDto: MakePaymentDto) {
        try {
            const { data } = await axios({
                method: 'POST',
                url: 'https://api.yookassa.ru/v3/payments',
                headers: {
                    'Content-Type': 'application/json',
                    'Idempotence-Key': Date.now(),
                },
                auth: {
                    username: '232263',
                    password: 'test_A9vzzYWDZ_dOqsJ5ilwW5AcjXEOv5eVyOwSbz2PbwEg',
                },
                data: {
                    amount: {
                        value: makePaymentDto.amount,
                        currency: 'RUB',
                    },
                    capture: true,
                    confirmation: {
                        type: 'redirect',
                        return_url: 'http://localhost:3001/order',
                    },
                    description: 'Заказ №1',
                },
            });
            return {data};
        } catch (error) {
            throw new ForbiddenException(error)
        }
    }
}
