import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from './base.shema';

@Schema()
export class SymbolDirection extends BaseSchema {}

export const SymbolDirectionSchema =
  SchemaFactory.createForClass(SymbolDirection);
export type SymbolDirectionDocument = SymbolDirection & Document;
