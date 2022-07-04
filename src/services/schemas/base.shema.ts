import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class BaseSchema {
  @Prop()
  imgs: { id: string; url: string }[];
}
