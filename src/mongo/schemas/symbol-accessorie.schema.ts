import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from './base.shema';

@Schema()
export class SymbolAccessorie extends BaseSchema {}

export const SymbolAccessorieSchema =
  SchemaFactory.createForClass(SymbolAccessorie);
export type SymbolAccessorieDocument = SymbolAccessorie & Document;
