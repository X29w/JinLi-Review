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
import { ConfigModule } from '@nestjs/config';
import { getConfig } from './utils/ymlConfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Robot } from './robots/entities/robot.entity';
import { Notice } from './notice/entities/notice.entity';
import { Company } from './company/entities/company.entity';
import { Content } from './content/entities/content.entity';
import { ContentCategory } from './content-category/entities/content-category.entity';
import { Inquiry } from './inquiry/entities/inquiry.entity';
import { Keyword } from './keywords/entities/keyword.entity';

@Module({
  imports: [
    InquiryModule,
    CompanyModule,
    ContentModule,
    ContentCategoryModule,
    KeywordsModule,
    RobotsModule,
    NoticeModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [getConfig],
    }),
    TypeOrmModule.forRootAsync({
      useFactory() {
        return {
          ...getConfig('MYSQL_CONFIG'),
          entities: [
            Robot,
            Notice,
            Company,
            Content,
            ContentCategory,
            Inquiry,
            Keyword,
          ],
        };
      },
      async dataSourceFactory(options) {
        if (!options) {
          throw new Error('Invalid options passed');
        }
        return new DataSource(options);
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
