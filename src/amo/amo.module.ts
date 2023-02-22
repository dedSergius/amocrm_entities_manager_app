import { Module, Global } from '@nestjs/common';
import { AmoService } from './amo.service';

@Global()
@Module({
  providers: [AmoService],
  exports: [AmoService],
})
export class AmoModule {
  constructor(private readonly amoService: AmoService) {
    amoService.init();
  }
}
