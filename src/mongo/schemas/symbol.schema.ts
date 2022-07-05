import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from './base.shema';

@Schema()
export class Symbol extends BaseSchema {
  @Prop()
  imgs: { id: string; url: string }[];
}

export const SymbolSchema = SchemaFactory.createForClass(Symbol);
export type SymbolDocument = Symbol & Document;
