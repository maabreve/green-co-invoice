export class InvoiceDto {
  id: number;
  cpf: string;
  amount: number;
  megaBytes: number;
  dueDate: Date;
  paid: boolean;
}