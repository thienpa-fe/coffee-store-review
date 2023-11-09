import connect from '@/lib/mongodb/connect';
import User from '@/models/User';
import { disconnect } from 'mongoose';
import { NextResponse } from 'next/server';

/**
 * @swagger
 * /api/users:
 *   get:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: Hello World!
 */
export const GET = async () => {
  try {
    await connect();
    const users = await User.find();
    return new NextResponse(JSON.stringify(users), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(`Error when fetch User data - ${error}`, {
      status: 500,
    });
  }
};
