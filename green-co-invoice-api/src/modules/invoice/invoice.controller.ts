import {
  Controller,
  CacheKey,
  Get,
  Post,
  Body,
} from '@nestjs/common';
import { InvoiceDto } from './invoice.dto';
import { InvoiceService } from './invoice.service';

@Controller('invoice')
export class InvoiceController {
  constructor(private invoiceService: InvoiceService) {}

  @Get('/')
  @CacheKey('green-co-invoices')
  async index(): Promise<Array<InvoiceDto>> {
    return this.invoiceService.getAll();
  }

  @Post()
  async create(@Body() invoiceDto: InvoiceDto) {
    // TODO: add invoice
    //

  }
}
