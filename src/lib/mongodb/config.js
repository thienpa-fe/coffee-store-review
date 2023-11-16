/* eslint-disable no-console */
import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;

const connect = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('🚀 ~ Connect to MongoDB successfully!');
  } catch (error) {
    throw new Error('Error when connect to mongoDB...');
  }
};

const disconnect = async () => {
  try {
    await mongoose.disconnect();
    console.log('⛔ ~ Disconnected from MongoDB!');
  } catch (error) {
    throw new Error('Error when disconnect to MongoDB...');
  }
};

export { connect, disconnect };
