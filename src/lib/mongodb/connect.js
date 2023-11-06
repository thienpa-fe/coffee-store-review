import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;

const connect = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
  } catch (error) {
    throw new Error('Error when connect to mongoDB...');
  }
};

export default connect;
