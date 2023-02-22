import { Controller, Post, Body } from '@nestjs/common';
import { AmoService } from './amo/amo.service';

@Controller()
export class AppController {
  constructor(private amoServise: AmoService) {}

  @Post('/entities')
  createEntity(
    @Body('type') type: string,
    @Body('name') name: string | undefined,
  ): object {
    return this.amoServise.createEntity(type, name);
  }
}
