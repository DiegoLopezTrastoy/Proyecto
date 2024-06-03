import {
  Button,
  Header,
  SpaceBetween,
  Table,
} from "@cloudscape-design/components";
import { reservas, vehiculos } from "../../env";
import { useNavigate } from "react-router-dom";

function Reservas() {
  const navigate = useNavigate();

  return (
    <>
      <SpaceBetween size={"s"}>
        <Table
          columnDefinitions={[
            {
              id: "variable",
              header: "Vehiculo",
              cell: (item) => {
                const v = vehiculos.find((val) => val.id == item.idVehiculo);
                return v?.marca! + " " + v?.modelo;
              },
            },
            {
              id: "alt",
              header: "Fecha y hora",
              cell: (item) =>
                item.fecha.getDay() +
                "/" +
                item.fecha.getMonth() +
                "/" +
                item.fecha.getFullYear() +
                " " +
                item.fecha.getHours() +
                ":" +
                item.fecha.getMinutes(),
              sortingField: "alt",
            },
            {
              id: "Tiempo",
              header: "Tiempo",
              cell: (item) => Math.round(item.tiempo / 60) + "h",
            },
            {
              id: "Coste",
              header: "Coste",
              cell: (item) => item.coste + "€",
            },
          ]}
          items={reservas}
          sortingDisabled
          variant="container"
          header={<Header variant="h1">Reservas</Header>}
        />
        <Button onClick={() => navigate("/buscar")}>Añadir reserva</Button>
      </SpaceBetween>
    </>
  );
}

export default Reservas;
