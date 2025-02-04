import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  page() {
    return 'Hello nestjs api home page';
  }
}
