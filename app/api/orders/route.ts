import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {

  try {

    const body =
      await request.json();

    console.log(body);

    const order =
      await prisma.order.create({

        data: {

          customerName:
            body.customerName,

          email:
            body.email,

          address:
            body.address,

          totalAmount:
            body.totalAmount,

          items: {

            create:
              body.items.map(
                (item: any) => ({

                  quantity:
                    item.quantity,

                  product: {
                    connect: {
                      id: item.id,
                    },
                  },

                })
              ),
          },
        },

        include: {
          items: true,
        },
      });

    return NextResponse.json(
      order
    );

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        error:
          "Failed to create order",
      },
      {
        status: 500,
      }
    );
  }
}