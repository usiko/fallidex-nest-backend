import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from './base.shema';

@Schema()
export class CircularColor extends BaseSchema {
  @Prop()
  circulaireId: string;

  @Prop()
  colorIds: string[];
}

export const CircularColorSchema = SchemaFactory.createForClass(CircularColor);
export type CircularColorDocument = CircularColor & Document;
