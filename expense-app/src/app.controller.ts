import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('report/:type')
export class AppController {
  @Get()
  getAllIncomeReports(
    @Param('type') type: string
  ) {
    console.log(type);
    
    return [];
  }

  @Get(':id')
  getIcomeReportById() {
    return {};
  }

  @Post()
  createIcomeReport() {
    return { status: 'CREATED' };
  }

  @Put(':id')
  updateIcomeReportById() {
    return { status: 'UPDATED' };
  }

  @Delete(':id')
  deleteIncomeReportById() {
    return { status: 'DELETED' };
  }
}
