import prisma from "@/lib/prisma";

async function main() {
  // Seed Users
  await prisma.user.createMany({
    data: [
      {
        id: "1",
        email: "admin@albertscarrental.com",
        name: "Admin User",
        isAdmin: true,
      },
      {
        id: "2",
        email: "user@albertscarrental.com",
        name: "Regular User",
        isAdmin: false,
      },
    ],
    skipDuplicates: true,
  });

  // Seed Vehicles
  await prisma.vehicle.createMany({
    data: [
      {
        id: 1,
        make: "Toyota",
        model: "Corolla",
        category: "LUXURY",
        year: 2022,
        color: "White",
        licensePlate: "ABC123",
        status: "available",
        image:
          "https://images.unsplash.com/photo-1684082018938-9c30f2a7045d?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        features: ["A/C", "Bluetooth", "GPS"],
      },
      {
        id: 2,
        make: "Honda",
        model: "Civic",
        year: 2021,
        color: "Blue",
        licensePlate: "XYZ789",
        category: "LUXURY",
        status: "available",
        image:
          "https://images.unsplash.com/photo-1684082018938-9c30f2a7045d?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        features: ["A/C", "Bluetooth", "GPS"],
      },
      {
        id: 3,
        make: "Ford",
        model: "Escape",
        year: 2023,
        color: "Red",
        licensePlate: "JKL456",
        status: "maintenance",
        category: "ECONOMY",
        image:
          "https://images.unsplash.com/photo-1684082018938-9c30f2a7045d?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        features: ["A/C", "Bluetooth", "GPS", "Sunroof"],
      },
    ],
    skipDuplicates: true,
  });
}

main()
  .then(() => {
    console.log("Seed data created successfully.");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
