import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';
import { ConsumptionDto } from './consumption.dto';
import { ConsumptionService } from './consumption.service';

@Controller('consupmtion')
export class ConsumptionController {
  constructor(private consumptionService: ConsumptionService) {}

  // post client consumption
  @Post('/')
  async postConsumption(@Body() consumption: ConsumptionDto) {
    // TODO: add Consumption
    return this.consumptionService.postConsumption(consumption);
  }
}
