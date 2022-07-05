import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from './base.shema';

@Schema()
export class ItemIndex extends BaseSchema {
  @Prop()
  modificationDate: number;
}

export const ItemIndexSchema = SchemaFactory.createForClass(ItemIndex);
export type ItemIndexDocument = ItemIndex & Document;
