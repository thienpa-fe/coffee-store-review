// Define reviews API and documents here
import { connect, disconnect } from '@/lib/mongodb/config';
import Review from '@/models/Review';
import { isValidObjectId } from 'mongoose';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    await connect();
    const reviews = await Review.find();
    disconnect();
    return NextResponse.json({ data: reviews, status: 200 });
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

    const newReview = new Review({ ...payload });
    await newReview.validate();
    await newReview.save();

    const updatedReviewsList = await Review.find();
    disconnect();
    return NextResponse.json(
      {
        data: updatedReviewsList,
        status: 201,
        message: 'Add new review successfully!',
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
    const { reviewId } = payload;

    if (!isValidObjectId(reviewId)) {
      return NextResponse.json(
        {
          data: [],
          status: 400,
          message: 'Invalid reviewId!',
        },
        {
          status: 400,
        },
      );
    }

    const existingReview = await Review.findById(reviewId);
    if (!existingReview) {
      disconnect();
      return NextResponse.json(
        {
          data: [],
          status: 404,
          message: 'Review is not found!',
        },
        {
          status: 404,
        },
      );
    }
    existingReview.overwrite(payload);
    await existingReview.save();
    const updatedReviewsList = await Review.find();
    disconnect();
    return NextResponse.json(
      {
        data: updatedReviewsList,
        status: 200,
        message: 'Update review successfully!',
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
    const { reviewId } = payload;

    if (!isValidObjectId(reviewId)) {
      return NextResponse.json(
        {
          data: [],
          status: 400,
          message: 'Invalid reviewId!',
        },
        {
          status: 400,
        },
      );
    }

    const existingReview = await Review.findById(reviewId);

    if (!existingReview) {
      disconnect();
      return NextResponse.json(
        {
          data: [],
          status: 404,
          message: 'Review is not found!',
        },
        {
          status: 404,
        },
      );
    }

    await Review.deleteOne({ _id: existingReview._id.toString() });

    const updatedReviewsList = await Review.find();
    disconnect();

    return NextResponse.json(
      {
        // data: updatedReviewsList,
        message: 'Delete review successfully!',
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
