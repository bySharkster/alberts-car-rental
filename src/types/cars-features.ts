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
    ],
    imgUrl: "/images/kia-rio.png",
  },
  {
    id: 3,
    name: "Supermatch SM 200 EFI 20247",
    features: [
      {
        id: 1,
        name: "Comodidad y estabilidad ", //para un viaje suave y estable en diferentes tipos de terreno
      },
      {
        id: 2,
        name: "Capacidad de carga para llevar fácilmente un pasajero o transportar tus pertenencias sin problemas", // Con una capacidad de carga máxima de 331 libras con la que podrás
      },
      {
        id: 3,
        name: "Maximo rendimiento de combustible con hasta 90 MPG", // Con un rendimiento de combustible de hasta 90 MPG, el SM 200 EFI es una excelente opción para aquellos que buscan un vehículo económico y eficiente.
      },
    ],
    imgUrl: "/images/supermatch-sm-200-efi-2024.jpg",
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
