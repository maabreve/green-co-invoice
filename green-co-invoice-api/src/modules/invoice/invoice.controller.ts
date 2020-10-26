import {
  Controller,
  CacheKey,
  Get,
  Post,
} from '@nestjs/common';
import { InvoiceDto } from './invoice.dto';
import { InvoiceService } from './invoice.service';

@Controller('invoice')
export class InvoiceController {
  constructor(private invoiceService: InvoiceService) {}

  // get invoices by cpf
  @Get('/')
  @CacheKey('green-co-invoices')
  async index(cpf: string): Promise<Array<InvoiceDto>> {
    return this.invoiceService.getAllByCpf(cpf);
  }
  // generate invoices by consumption
  @Post('/generate')
  async generateInvoice(): Promise<void> {
    // TODO: add invoice
    return this.invoiceService.generatedInvoice();
  }
}
