import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from './base.shema';

@Schema()
export class Earn extends BaseSchema {}

export const EarnSchema = SchemaFactory.createForClass(Earn);
