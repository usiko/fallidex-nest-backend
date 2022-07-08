import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from './base.shema';

@Schema()
export class Relation extends BaseSchema {
  @Prop()
  modificationDate: number;

  @Prop()
  annee: number;

  @Prop()
  relations: {
    placementId: string;
    positionId: string;
    filiereId: string;
    symboleId: string;
    symboleSensId: string;
    symboleAccessoryId: string;
    circulaireId: string;
    significationId: string;
  }[];

  @Prop()
  specificites: {
    name: string;
    id: string;
    text: string;
    article: string;
  }[];
}

export const RelationSchema = SchemaFactory.createForClass(Relation);
export type RelationDocument = Relation & Document;
