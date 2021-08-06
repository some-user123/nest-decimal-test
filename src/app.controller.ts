import { Controller, Get } from '@nestjs/common';

import { Decimal } from 'decimal.js';

@Controller()
export class AppController {
  @Get()
  getHello() {
    return { value: new Decimal('42') };
  }
}
