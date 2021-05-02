import { Test, TestingModule } from '@nestjs/testing';
import { CitySuggestionsController } from './city-suggestions.controller';
import { CitySuggestionsService } from './city-suggestions.service';

describe('CitySuggestionsController', () => {
  let citySuggestionsController: CitySuggestionsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CitySuggestionsController],
      providers: [CitySuggestionsService],
    }).compile();

    citySuggestionsController = app.get<CitySuggestionsController>(CitySuggestionsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(citySuggestionsController.getHello()).toBe('Hello World!');
    });
  });
});
