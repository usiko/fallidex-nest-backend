import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from './base.shema';

@Schema()
export class Meaning extends BaseSchema {
  @Prop()
  content: string;
}

export const MeaningSchema = SchemaFactory.createForClass(Meaning);
