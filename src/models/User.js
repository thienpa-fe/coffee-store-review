import { model, models, Schema } from 'mongoose';
import COLLECTIONS from '.';

const UserSchema = new Schema(
  {
    id: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    address: String,
  },
  { timestamps: true, collection: COLLECTIONS.user },
);

export default models[COLLECTIONS.user] || model(COLLECTIONS.user, UserSchema);
