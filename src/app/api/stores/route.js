import connect from '@/lib/mongodb/connect';
import Store from '@/models/Store';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    await connect();
    const stores = await Store.find();
    return new NextResponse(JSON.stringify(stores), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(`Error when fetch Store data - ${error}`, {
      status: 500,
    });
  }
};
