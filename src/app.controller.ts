import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('frequent')
  mostFrequentWord(@Query() query: any): string {
    return this.appService.mostFrequentWord(query.paragraph, query.forbidden);
  }
}
