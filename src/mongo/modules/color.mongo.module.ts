import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Color, ColorSchema } from '../schemas/Color.schema';
import { ColorMongoService } from '../services/Color.mongo.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Color.name, schema: ColorSchema }]),
  ],

  providers: [ColorMongoService],
})
export class ColorMongoModule {}
