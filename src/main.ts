import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { AmoService } from './amo/amo.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  await app.listen(80);
}
bootstrap();
