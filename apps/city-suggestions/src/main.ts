import { NestFactory } from '@nestjs/core';
import { CitySuggestionsModule } from './city-suggestions.module';

async function bootstrap() {
  const app = await NestFactory.create(CitySuggestionsModule);
  await app.listen(3000);
}
bootstrap();
