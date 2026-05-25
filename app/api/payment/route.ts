import Razorpay from "razorpay";

import { NextResponse } from "next/server";

const razorpay =
  new Razorpay({

    key_id:
      process.env
        .RAZORPAY_KEY_ID!,

    key_secret:
      process.env
        .RAZORPAY_KEY_SECRET!,
  });

export async function POST(
  request: Request
) {

  try {

    const body =
      await request.json();

    const options = {

      amount:
        body.amount * 100,

      currency: "INR",

      receipt:
        `receipt_${Date.now()}`,
    };

    const order =
      await razorpay.orders.create(
        options
      );

    return NextResponse.json(
      order
    );

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        error:
          "Payment creation failed",
      },
      {
        status: 500,
      }
    );
  }
}