import COLLECTIONS from '@/models';
import { LocationSchema } from '@/models/sub/Location';
import { PriceRangeSchema } from '@/models/sub/PriceRange';
import { WorkingTimeSchema } from '@/models/sub/WorkingTime';
import { Schema, model, models } from 'mongoose';

const StoreSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },

    allowReview: {
      type: Boolean,
      required: true,
    },
    allowReact: {
      type: Boolean,
      required: true,
    },
    description: {
      type: String,
      max: 300,
    },
    location: {
      type: LocationSchema,
      required: true,
    },
    workingTime: WorkingTimeSchema,
    priceRange: PriceRangeSchema,
  },
  {
    timestamps: true,
    collection: COLLECTIONS.store,
  },
);

export default models[COLLECTIONS.store] ||
  model(COLLECTIONS.store, StoreSchema);
