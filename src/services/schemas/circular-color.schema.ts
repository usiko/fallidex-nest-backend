import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from './base.shema';

@Schema()
export class CirculareColor extends BaseSchema {
	@Prop()
	circulaireId: string;

	@Prop()
	colorIds: string[];
}

export const CirculareColorSchema = SchemaFactory.createForClass(CirculareColor);
