// cars and features list
export interface Car {
  id: number;
  name: string;
  features: Feature[];
  imgUrl: string;
}
export interface Feature {
  id: number;
  name: string;
}

const cars: Car[] = [
  {
    id: 1,
    name: "Toyota Yaris 2016",
    features: [
      {
        id: 1,
        name: "Transmisión automática",
      },
      {
        id: 2,
        name: "Hasta 5 pasajeros",
      },
      {
        id: 3,
        name: "Excelente rendimiento de combustible.",
      },
    ],
    imgUrl: "/images/toyota-yaris.png",
  },
  {
    id: 2,
    name: "Kia Rio 2017",
    features: [
      {
        id: 1,
        name: "Comodo y espacioso",
      },
      {
        id: 2,
        name: "Transmisión automática",
      },
      {
        id: 3,
        name: "Hasta 5 pasajeros",
      },
      {
        id: 4,
        name: "Excelente rendimiento de combustible",
      },
      { id: 5, name: "Cámara de retroceso" },
    ],
    imgUrl: "/images/kia-rio.png",
  },
  {
    id: 100,
    name: "Add-ons",
    features: [
      {
        id: 1,
        name: "Ofrecemos servicio de alquiler de car seats para los más pequeños.",
      },

      {
        id: 2,
        name: "¡Entre otros... pregúntenos!",
      },
    ],
    imgUrl: "/images/car-seat.jpg",
  },
];

export default cars;
