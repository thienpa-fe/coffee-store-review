import { Schema } from 'mongoose';

export const PriceRangeSchema = new Schema({
  from: Number,
  to: Number,
});
