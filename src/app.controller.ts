import {
  CacheKey,
  CacheTTL,
  Controller,
  Get,
  // UseInterceptors,
  // CacheInterceptor,
} from '@nestjs/common';
import { AppService } from './app.service';

// @UseInterceptors(CacheInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @CacheKey('some_route')
  @CacheTTL(60)
  async getHello() {
    return this.appService.getHello();
  }
}

// import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }
