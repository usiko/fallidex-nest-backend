import { Module } from '@nestjs/common';
import { RelationMongoModule } from 'src/mongo/modules/relation.mongo.module';
import { DataLinkController } from './data-link.controller';
import { DataLinkService } from './data-link.service';

@Module({
  imports: [RelationMongoModule],
  controllers: [DataLinkController],
  providers: [DataLinkService],
})
export class DataLinkModule {}
