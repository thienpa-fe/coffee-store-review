import { connect, disconnect } from '@/lib/mongodb/config';
import Store from '@/models/Store';
import { isValidObjectId } from 'mongoose';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    await connect();
    const stores = await Store.find();
    disconnect();
    return NextResponse.json({ data: stores, status: 200 });
  } catch ({ errors, _message }) {
    return NextResponse.json(
      {
        errors,
        message: _message,
        status: 500,
      },
      { status: 500 },
    );
  }
};

export const POST = async (request) => {
  try {
    await connect();
    const payload = await request.json();

    const newStore = new Store({ ...payload });
    await newStore.validate();
    await newStore.save();

    const updatedStoresList = await Store.find();
    disconnect();
    return NextResponse.json(
      {
        data: updatedStoresList,
        status: 201,
        message: 'Add new store successfully!',
      },
      {
        status: 201,
      },
    );
  } catch ({ errors, _message }) {
    return NextResponse.json(
      {
        errors,
        message: _message,
        status: 500,
      },
      { status: 500 },
    );
  }
};

export const PUT = async (request) => {
  try {
    await connect();
    const payload = await request.json();
    const { storeId } = payload;

    if (!isValidObjectId(storeId)) {
      return NextResponse.json(
        {
          data: [],
          status: 400,
          message: 'Invalid storeId!',
        },
        {
          status: 400,
        },
      );
    }

    const existingStore = await Store.findById(storeId);
    if (!existingStore) {
      disconnect();
      return NextResponse.json(
        {
          data: [],
          status: 404,
          message: 'Store is not found!',
        },
        {
          status: 404,
        },
      );
    }
    existingStore.overwrite(payload);
    await existingStore.save();
    const updatedStoresList = await Store.find();
    return NextResponse.json(
      {
        data: updatedStoresList,
        status: 200,
        message: 'Update store successfully!',
      },
      {
        status: 200,
      },
    );
  } catch ({ errors, _message }) {
    return NextResponse.json(
      {
        errors,
        message: _message,
        status: 500,
      },
      { status: 500 },
    );
  }
};

export const DELETE = async (request) => {
  try {
    await connect();
    const payload = await request.json();
    const { storeId } = payload;

    if (!isValidObjectId(storeId)) {
      return NextResponse.json(
        {
          data: [],
          status: 400,
          message: 'Invalid storeId!',
        },
        {
          status: 400,
        },
      );
    }

    const existingStore = await Store.findById(storeId);
    if (!existingStore) {
      disconnect();
      return NextResponse.json(
        {
          data: [],
          status: 404,
          message: 'Store is not found!',
        },
        {
          status: 404,
        },
      );
    }

    await Store.deleteOne({ _id: existingStore._id.toString() });

    const updatedStoresList = await Store.find();
    disconnect();

    return NextResponse.json(
      {
        data: updatedStoresList,
        message: 'Delete store successfully!',
        status: 200,
      },
      {
        status: 200,
      },
    );
  } catch (errors) {
    return NextResponse.json(
      {
        errors,
        status: 500,
      },
      { status: 500 },
    );
  }
};
