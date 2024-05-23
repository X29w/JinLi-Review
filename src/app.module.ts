import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InquiryModule } from './inquiry/inquiry.module';
import { KeyWordsModule } from './key-words/key-words.module';
import { CompanyModule } from './company/company.module';
import { ContentModule } from './content/content.module';
import { ContentCategoryModule } from './content-category/content-category.module';

@Module({
  imports: [InquiryModule, KeyWordsModule, CompanyModule, ContentModule, ContentCategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
