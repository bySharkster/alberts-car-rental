// packages/prisma/seed.ts
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("\n=== 🚗 Car Rental DB Seeding Started ===\n");

  // USERS
  console.log("\nSeeding users...");
  const users = await prisma.user.createMany({
    data: [
      {
        id: "1",
        name: "Alice Johnson",
        email: "alice1@example.com",
        phone: "+1-202-555-0101",
        image:
          "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=256&h=256&facepad=2",
        isAdmin: false,
      },
      {
        id: "2",
        name: "Bob Lee",
        email: "bob2@example.com",
        phone: "+1-202-555-0102",
        image:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=256&h=256&facepad=2",
        isAdmin: false,
      },
      {
        id: "3",
        name: "Carol Smith",
        email: "carol3@example.com",
        phone: "+1-202-555-0103",
        image:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=256&h=256&facepad=2",
        isAdmin: false,
      },
      {
        id: "4",
        name: "David Brown",
        email: "david4@example.com",
        phone: "+1-202-555-0104",
        image:
          "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=256&h=256&facepad=2",
        isAdmin: false,
      },
    ],
    skipDuplicates: true,
  });
  console.log("\nUsers seeded:");
  console.table(users);

  // VEHICLES
  console.log("\nSeeding vehicles...");
  const vehicles = await prisma.vehicle.createMany({
    data: [
      {
        id: 1,
        make: "Tesla",
        model: "Model S",
        year: 2023,
        category: "SEDAN",
        licensePlate: "ABC123",
        status: "AVAILABLE",
        color: "Black",
        transmission: "AUTOMATIC",
        fuel_type: "ELECTRIC",
        features: ["Sunroof", "GPS", "Bluetooth"],
        dailyRate: 99.99,
      },
      {
        id: 2,
        make: "BMW",
        model: "X5",
        year: 2021,
        category: "SUV",
        licensePlate: "XYZ789",
        status: "AVAILABLE",
        color: "White",
        transmission: "AUTOMATIC",
        fuel_type: "GASOLINE",
        features: ["Leather Seats"],
        dailyRate: 89.99,
      },
      {
        id: 3,
        make: "Toyota",
        model: "Corolla",
        year: 2020,
        category: "SEDAN",
        licensePlate: "T12345",
        status: "UNAVAILABLE",
        color: "Blue",
        transmission: "AUTOMATIC",
        fuel_type: "GASOLINE",
        features: ["Bluetooth"],
        dailyRate: 49.99,
      },
      {
        id: 4,
        make: "Audi",
        model: "A4",
        year: 2021,
        category: "SEDAN",
        licensePlate: "A45678",
        status: "PENDING",
        color: "Silver",
        transmission: "AUTOMATIC",
        fuel_type: "GASOLINE",
        features: ["Heated Seats"],
        dailyRate: 79.99,
      },
    ],
    skipDuplicates: true,
  });
  console.log("\nVehicles seeded:");
  console.table(vehicles);

  // IMAGES
  console.log("\nSeeding images...");
  const images = await prisma.image.createMany({
    data: [
      {
        id: "img1",
        vehicleId: 1,
        url: "https://images.unsplash.com/photo-1619848211161-ec4db7fe6bbd?q=80&w=1170&auto=format&fit=crop",
        position: 1,
      },
      {
        id: "img2",
        vehicleId: 2,
        url: "https://images.unsplash.com/photo-1712885046114-5ea81a2f7555?q=80&w=1160&auto=format&fit=crop",
        position: 1,
      },
      {
        id: "img3",
        vehicleId: 3,
        url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=256&h=256&facepad=2",
        position: 1,
      },
      {
        id: "img4",
        vehicleId: 4,
        url: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=facearea&w=256&h=256&facepad=2",
        position: 1,
      },
    ],
    skipDuplicates: true,
  });
  console.log("\nImages seeded:");
  console.table(images);

  // RESERVATIONS
  console.log("\nSeeding reservations...");
  const reservations = await prisma.reservation.createMany({
    data: [
      {
        id: "b1",
        userId: "1",
        vehicleId: 1,
        pickupDate: new Date("2025-06-01"),
        dropoffDate: new Date("2025-06-03"),
        status: "PENDING",
        paymentStatus: "PARTIAL",
        pickupLocation: "Airport",
        dropoffLocation: "Downtown",
        dailyRate: 99,
        totalDays: 2,
        subtotal: 198,
        tax: 20,
        totalAmount: 218,
        notes: null,
        specialRequests: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        pickupHour: "10:00",
        dropoffHour: "12:00",
        amountPaid: 218,
      },
      {
        id: "b2",
        userId: "2",
        vehicleId: 2,
        pickupDate: new Date("2025-06-02"),
        dropoffDate: new Date("2025-06-05"),
        status: "ACTIVE",
        paymentStatus: "PAID",
        pickupLocation: "Airport",
        dropoffLocation: "Hotel",
        dailyRate: 89,
        totalDays: 3,
        subtotal: 267,
        tax: 27,
        totalAmount: 294,
        notes: null,
        specialRequests: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        pickupHour: "10:00",
        dropoffHour: "12:00",
        amountPaid: 294,
      },
      {
        id: "b3",
        userId: "3",
        vehicleId: 3,
        pickupDate: new Date("2025-06-03"),
        dropoffDate: new Date("2025-06-06"),
        status: "CANCELLED",
        paymentStatus: "REFUNDED",
        pickupLocation: "Station",
        dropoffLocation: "Airport",
        dailyRate: 49,
        totalDays: 3,
        subtotal: 147,
        tax: 15,
        totalAmount: 162,
        notes: "Client cancelled due to illness.",
        specialRequests: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        pickupHour: "10:00",
        dropoffHour: "12:00",
        amountPaid: 0,
      },
      {
        id: "b4",
        userId: "4",
        vehicleId: 4,
        pickupDate: new Date("2025-06-04"),
        dropoffDate: new Date("2025-06-08"),
        status: "PENDING",
        paymentStatus: "UNPAID",
        pickupLocation: "Hotel",
        dropoffLocation: "Downtown",
        dailyRate: 79,
        totalDays: 4,
        subtotal: 316,
        tax: 32,
        totalAmount: 348,
        notes: null,
        specialRequests: "Child seat",
        createdAt: new Date(),
        updatedAt: new Date(),
        pickupHour: "10:00",
        dropoffHour: "12:00",
        amountPaid: 0,
      },
    ],
    skipDuplicates: true,
  });
  console.log("\nReservations seeded:");
  console.table(reservations);

  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
}
