import { Controller, Get } from '@nestjs/common';
import { CitySuggestionsService } from './city-suggestions.service';

@Controller()
export class CitySuggestionsController {
  constructor(private readonly citySuggestionsService: CitySuggestionsService) {}

  @Get()
  getHello(): string {
    return this.citySuggestionsService.getHello();
  }
}
