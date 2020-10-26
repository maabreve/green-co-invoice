import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvoiceModule } from './modules/invoice/invoice.module';
import { ConsumptionModule } from './modules/consumption/consumption.module';
import configuration from './config/configuration';

@Module({
  imports: [ConfigModule.forRoot({ load: [configuration] }), InvoiceModule, ConsumptionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
