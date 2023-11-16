import { Schema } from 'mongoose';

export const LocationSchema = new Schema({
  lat: {
    type: Number,
    required: true,
  },
  lng: {
    type: Number,
    required: true,
  },
});
