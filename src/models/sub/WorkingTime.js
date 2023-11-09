import { Schema } from 'mongoose';

export const WorkingTimeSchema = new Schema({
  openAt: Date,
  closeAt: Date,
});
