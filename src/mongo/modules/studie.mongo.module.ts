import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Studie, StudieSchema } from '../schemas/studies.schema';
import { StudieMongoService } from '../services/studies.mongo.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Studie.name, schema: StudieSchema }]),
  ],

  providers: [StudieMongoService],
})
export class StudieMongoModule {}
