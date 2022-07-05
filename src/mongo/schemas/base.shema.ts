import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class BaseSchema {
  @Prop()
  name: string;

  @Prop()
  id: string;
}
