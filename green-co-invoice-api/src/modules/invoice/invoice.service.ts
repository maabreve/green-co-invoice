import { Injectable } from '@nestjs/common';
import { InvoiceDto } from './invoice.dto';

const invoices: Array<InvoiceDto> = [
  {
    id: 1,
    cpf: '00000000000',
    amount: 41.19,
    megaBytes: 2377,
    dueDate: new Date('2020/09/01'),
    paid: true
  },
  {
    id: 2,
    cpf: '00000000000',
    amount: 47.32,
    megaBytes: 2958,
    dueDate: new Date('2020/10/01'),
    paid: false
  },
  {
    id: 3,
    cpf: '00000000000',
    amount: 4.65,
    megaBytes: 306,
    dueDate: new Date('2020/11/01'),
    paid: false
  }
];

@Injectable()
export class InvoiceService {
  // get invoices by Cpf
  async getAllByCpf(cpf: string):Promise< Array<InvoiceDto>> {
    return new Promise((resolve, reject) => {
      resolve(invoices);
    });
  }

  async generatedInvoice() {
    // Insert into invoices,
    // select sum megaBytes grouped by cpf, month
    // where generated = false
  }
}
