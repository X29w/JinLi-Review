import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InquiryModule } from './inquiry/inquiry.module';
import { CompanyModule } from './company/company.module';
import { ContentModule } from './content/content.module';
import { ContentCategoryModule } from './content-category/content-category.module';
import { KeywordsModule } from './keywords/keywords.module';
import { RobotsModule } from './robots/robots.module';
import { NoticeModule } from './notice/notice.module';

@Module({
  imports: [
    InquiryModule,
    CompanyModule,
    ContentModule,
    ContentCategoryModule,
    KeywordsModule,
    RobotsModule,
    NoticeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
