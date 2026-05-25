import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {

  try {

    const body =
      await request.json();

    const product =
      await prisma.product.create({
        data: {
          title: body.title,
          price: body.price,
          image: body.image,
          description:
            body.description,
        },
      });

    return NextResponse.json(
      product
    );

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        error:
          "Failed to create product",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  request: Request
) {

  try {

    const body =
      await request.json();

    await prisma.product.delete({
      where: {
        id: body.id,
      },
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        error:
          "Failed to delete product",
      },
      {
        status: 500,
      }
    );
  }
}