import COLLECTIONS from '@/models';
import { PriceRangeSchema } from '@/models/sub/PriceRange';
import { WorkingTimeSchema } from '@/models/sub/WorkingTime';
import { Schema, model, models } from 'mongoose';

const StoreSchema = new Schema(
  {
    id: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },

    allowReview: {
      type: Boolean,
      require: true,
    },
    allowReact: {
      type: Boolean,
      require: true,
    },
    description: {
      type: String,
      max: 300,
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
