import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { CompanyModule } from './company.module';
import { EmployeeModule } from './employee.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CompanyModule,
    EmployeeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
