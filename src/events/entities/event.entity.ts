import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Event {
  @Prop()
  type: string;

  @Prop({ index: true })
  name: string;

  @Prop(mongoose.Schema.Types.Mixed)
  payload: Record<string, any>;
}

export const EventSchema = SchemaFactory.createForClass(Event);
EventSchema.index({ type: 1, name: -1 });
