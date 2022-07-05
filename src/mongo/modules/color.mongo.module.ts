import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Color, ColorSchema } from '../schemas/color.schema';
import { ColorMongoService } from '../services/color.mongo.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Color.name, schema: ColorSchema }]),
  ],

  providers: [ColorMongoService],
  exports: [ColorMongoService],
})
export class ColorMongoModule {}
