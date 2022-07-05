import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from './base.shema';

@Schema()
export class Position extends BaseSchema {}

export const PositionSchema = SchemaFactory.createForClass(Position);
export type PositionDocument = Position & Document;
