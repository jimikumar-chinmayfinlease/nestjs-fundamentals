import { Controller, Get, Header, HttpCode, Param, Post, Query, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Redirect('https://nestjs.com', 301)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('ab*cd')
  findAll(){
    return 'This route uses wildcard';
  }

  @Post()
  @HttpCode(204)
  @Header('Cache-Control','none')
  create(){
    return 'This action adds a new cat';
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if(version && version === '5'){
      return {
        url: 'https://docs.nestjs.com/v5/'
      };
    }
  }

  // @Get(':id')
  // findOne(@Param() params: any): string {
  //   console.log(params.id);
  //   return `This action returns a #${params.id} cat`;
  // }
}
