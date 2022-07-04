import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from './base.shema';

@Schema()
export class Circulare extends BaseSchema {
  @Prop()
  matiere: string;
}

export const CirculareSchema = SchemaFactory.createForClass(Circulare);
