import { Injectable } from '@nestjs/common';
import { ConsumptionDto } from './consumption.dto';

const consumption: Array<ConsumptionDto> = [
  {
    id: 1,
    cpf: '00000000000',
    megaBytes: 100,
    date: new Date('2020/08/10'),
    hour: '10:00',
    generated: false,
  },
  {
    id: 2,
    cpf: '00000000000',
    megaBytes: 50,
    date: new Date('2020/08/15'),
    hour: '09:30',
    generated: false,
  },
  {
    id: 3,
    cpf: '00000000000',
    megaBytes: 200,
    date: new Date('2020/08/30'),
    hour: '23:00',
    generated: false,
  },
  {
    id: 4,
    cpf: '00000000000',
    megaBytes: 10,
    date: new Date('2020/09/10'),
    hour: '15:00',
    generated: false,
  },
  {
    id: 5,
    cpf: '00000000000',
    megaBytes: 1000,
    date: new Date('2020/09/12'),
    hour: '10:30',
    generated: false,
  },
  {
    id: 6,
    cpf: '00000000000',
    megaBytes: 150,
    date: new Date('2020/09/30'),
    hour: '15:37',
    generated: false,
  },
  {
    id: 7,
    cpf: '00000000000',
    megaBytes: 90,
    date: new Date('2020/10/12'),
    hour: '08:30',
    generated: false,
  },
  {
    id: 8,
    cpf: '00000000000',
    megaBytes: 100,
    date: new Date('2020/10/30'),
    hour: '18:22',
    generated: false,
  }
];

@Injectable()
export class ConsumptionService {
  // post consumption register
  async postConsumption(register: ConsumptionDto): Promise<ConsumptionDto> {
    register.generated = false;
    consumption.push(register);

    return new Promise((resolve, reject) => {
      resolve(register);
    });
  }
}
