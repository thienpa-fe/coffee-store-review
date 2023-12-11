import COLLECTIONS from '@/models';
// import { LocationSchema } from '@/models/sub/Location';
// import { PriceRangeSchema } from '@/models/sub/PriceRange';
// import { WorkingTimeSchema } from '@/models/sub/WorkingTime';
import { Schema, model, models } from 'mongoose';

const ReviewSchema = new Schema({
  author: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  reaction: {
    type: String,
    required: true,
  },
});

export default models[COLLECTIONS.review] ||
  model(COLLECTIONS.review, ReviewSchema);
