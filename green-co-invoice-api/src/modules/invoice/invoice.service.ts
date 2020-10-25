import { Injectable } from '@nestjs/common';
import { InvoiceDto } from './invoice.dto';

@Injectable()
export class InvoiceService {
  async getAll():Promise< Array<InvoiceDto>> {
      const invoices: Array<InvoiceDto> = [];
    invoices.push(
      {
        id: 1,
        amount: 41.19,
        megaBytes: 2377,
        dueDate: new Date('2020/09/01'),
        paid: true
      },
      {
        id: 2,
        amount: 47.32,
        megaBytes: 2958,
        dueDate: new Date('2020/10/01'),
        paid: false
      },
      {
        id: 3,
        amount: 4.65,
        megaBytes: 306,
        dueDate: new Date('2020/11/01'),
        paid: false
      }
    );

    return new Promise((resolve, reject) => {
      resolve(invoices);
    });
  }
}
