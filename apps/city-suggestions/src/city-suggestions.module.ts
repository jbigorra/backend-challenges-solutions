import { Module } from '@nestjs/common';
import { CitySuggestionsController } from './city-suggestions.controller';
import { CitySuggestionsService } from './city-suggestions.service';

@Module({
  imports: [],
  controllers: [CitySuggestionsController],
  providers: [CitySuggestionsService],
})
export class CitySuggestionsModule {}
