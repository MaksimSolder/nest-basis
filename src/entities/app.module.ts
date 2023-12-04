import { Module } from '@nestjs/common';
import {UserModule} from "./user/user.module";
import {TypeOrmModule} from "../db/typeorm.module";
import {ConfigModule} from "../config.module";

@Module({
  imports: [
      ConfigModule,
      TypeOrmModule,
      UserModule
  ],
})
export class AppModule {}
