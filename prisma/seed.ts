import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  await prisma.product.createMany({
    data: [
      {
        title: "Liquid Detergent",
        description:
          "Advanced liquid detergent for deep cleaning and freshness.",
        price: 299,
        image: "/products/detergent.jpg",
      },
      {
        title: "Floor Cleaner",
        description:
          "Premium floor cleaner with long-lasting fragrance.",
        price: 199,
        image: "/products/floor-cleaner.jpg",
      },
      {
        title: "Dish Wash Liquid",
        description:
          "Powerful grease-removing dish wash liquid.",
        price: 149,
        image: "/products/dishwash.jpg",
      },
      {
        title: "Glass Cleaner",
        description:
          "Crystal clear glass cleaner for spotless shine.",
        price: 129,
        image: "/products/glass-cleaner.jpg",
      },
    ],
  });

  console.log("Products seeded successfully");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });