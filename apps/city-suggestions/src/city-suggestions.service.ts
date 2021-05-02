import { Injectable } from '@nestjs/common';

@Injectable()
export class CitySuggestionsService {
  getHello(): string {
    return 'Hello World!';
  }
}
