import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from './base.shema';

@Schema()
export class Studie extends BaseSchema {}

export const StudieSchema = SchemaFactory.createForClass(Studie);
