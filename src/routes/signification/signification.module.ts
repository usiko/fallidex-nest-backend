import { Module } from '@nestjs/common';
import { MeaningMongoModule } from 'src/mongo/modules/meaning.mongo.module';
import { SignificationController } from './signification.controller';
import { SignificationService } from './signification.service';

@Module({
  imports: [MeaningMongoModule],
  controllers: [SignificationController],
  providers: [SignificationService],
})
export class SignificationModule {}
