import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from './base.shema';

@Schema()
export class Circular extends BaseSchema {
  @Prop()
  matiere: string;
}

export const CircularSchema = SchemaFactory.createForClass(Circular);
export type CircularDocument = Circular & Document;
