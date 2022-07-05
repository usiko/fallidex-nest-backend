import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from './base.shema';

@Schema()
export class Color extends BaseSchema {
  @Prop()
  colorData: string;
}

export const ColorSchema = SchemaFactory.createForClass(Color);
export type ColorDocument = Color & Document;
