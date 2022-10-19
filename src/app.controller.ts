import {
  CacheKey,
  CacheTTL,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  // UseInterceptors,
  // CacheInterceptor,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';

// @UseInterceptors(CacheInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post(':cacheManagerKey')
  create(
    @Param('cacheManagerKey')
    cacheManagerKey: string,
    @Body() createDto: CreateDto,
  ) {
    return this.appService.create(createDto, cacheManagerKey);
  }

  @Get(':cacheManagerKey')
  @CacheKey('cacheManagerKey')
  @CacheTTL(1)
  get(
    @Param('cacheManagerKey')
    cacheManagerKey: string,
  ) {
    return this.appService.getByKey(cacheManagerKey);
  }

  @Put(':cacheManagerKey')
  update(
    @Param('cacheManagerKey')
    cacheManagerKey: string,
    @Body() updateDto: UpdateDto,
  ) {
    return this.appService.updateOne(cacheManagerKey, updateDto);
  }

  @Delete(':cacheManagerKey')
  remove(@Param('cacheManagerKey') cacheManagerKey: string) {
    return this.appService.remove(cacheManagerKey);
  }
}
