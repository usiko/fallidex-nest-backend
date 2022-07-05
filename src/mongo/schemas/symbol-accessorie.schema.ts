import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from './base.shema';

@Schema()
export class SymbolAccessorie extends BaseSchema {
  @Prop()
  content: string;
}

export const SymbolAccessorieSchema =
  SchemaFactory.createForClass(SymbolAccessorie);
export type SymbolAccessorieDocument = SymbolAccessorie & Document;
