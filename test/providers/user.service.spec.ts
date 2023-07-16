import { INestApplication } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import * as bcrypt from 'bcrypt';
import { SequelizeModule } from "@nestjs/sequelize";
import { Test, TestingModule } from '@nestjs/testing';
import { databaseConfig } from "src/config/configuration";
import { SequelizeConfigService } from "src/config/sequelizeConfig.service";
import { User } from "src/users/users.model";
import { UsersModule } from "src/users/users.module";
import { UsersService } from "src/users/users.service";


describe('Users Service', () => {
    let app: INestApplication;
    let usersSevice: UsersService;

    beforeEach(async () => {
        const testModule: TestingModule = await Test.createTestingModule({
            imports: [
                SequelizeModule.forRootAsync({
                    imports: [ConfigModule],
                    useClass: SequelizeConfigService
                }),
                ConfigModule.forRoot({
                    load: [databaseConfig]
                }),
                UsersModule,
            ],
        }).compile();

        usersSevice = testModule.get<UsersService>(UsersService)
        app = testModule.createNestApplication();
        await app.init()
    });

    afterEach ( async () => {
        await User.destroy({ where: { username: 'Test' } })
    });

    it('should create user', async () => {
        const newUser = {
            username: 'Test',
            email: 'test@gmail.com',
            password: 'test132'
        };

        const user = (await usersSevice.create(newUser)) as User;

        const passwordIsValid = await bcrypt.compare(
            newUser.password, 
            user.password
            );

        expect (user.username).toBe(newUser.username);
        expect (passwordIsValid).toBe(true);
        expect (user.email).toBe(newUser.email);
    } );
});