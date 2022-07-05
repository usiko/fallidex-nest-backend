import { Module } from '@nestjs/common';
import { ColorMongoModule } from 'src/mongo/modules/color.mongo.module';
import { ColorController } from './color.controller';
import { ColorService } from './color.service';

@Module({
  imports: [ColorMongoModule],
  controllers: [ColorController],
  providers: [ColorService],
})
export class ColorModule {}
