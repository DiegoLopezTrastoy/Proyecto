export const nombreApp = "Leira Parking";
export const blanco = "#FFFFFF";
export const negro = "#000000";
export const vehiculos = [
  { marca: "Peugeot", modelo: "306", id: 1 },
  { marca: "Renault", modelo: "5", id: 2 },
  { marca: "Tesla", modelo: "model s", id: 3 },
];
export const reservas = [
  {
    id: 1,
    idVehiculo: 1,
    fecha: new Date(2024, 11, 30, 14, 30, 0),
    tiempo: 60,
    coste: 6,
  },
  {
    id: 2,
    idVehiculo: 2,
    fecha: new Date(2024, 10, 16, 14, 30, 0),
    tiempo: 500,
    coste: 6,
  },
  {
    id: 3,
    idVehiculo: 1,
    fecha: new Date(2024, 9, 30, 14, 30, 0),
    tiempo: 25200,
    coste: 15,
  },
  {
    id: 4,
    idVehiculo: 3,
    fecha: new Date(2024, 11, 20, 14, 30, 0),
    tiempo: 100800,
    coste: 45,
  },
  {
    id: 5,
    idVehiculo: 1,
    fecha: new Date(2024, 11, 10, 14, 30, 0),
    tiempo: 1209600,
    coste: 500,
  },
];
