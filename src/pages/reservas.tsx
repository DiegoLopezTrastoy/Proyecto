import {
  Button,
  Header,
  Hotspot,
  SpaceBetween,
  Table,
} from "@cloudscape-design/components";
import { reservas, vehiculos } from "../../env";
import { useNavigate } from "react-router-dom";

function Reservas() {
  const navigate = useNavigate();


  const convertTime = (num: number)=> {
    const horas = Math.round(num /60);
    const dias = Math.round((num /60)/8);
    const semanas = Math.round((num /60)/420);
    const meses = Math.round((num /60)/1680);
    const anos = Math.round((num /60)/20160);
    if (anos >= 1) {
      return anos+' año/años'
    }
    if (meses >= 1) {
      return meses+' mes/meses'
    }
    if (semanas >= 1) {
      return semanas+' semana/semanas'
    }
    if (dias >= 1) {
      return dias+' dia/dias'
    }
    if (horas >= 1) {
      return horas+' hora/horas'
    }
  }

  return (
    <>
      <SpaceBetween size={"s"}>
      <Hotspot side="right" hotspotId="13" />

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
              cell: (item) => convertTime(item.tiempo),
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
        <SpaceBetween size={"s"} direction="horizontal">
        <Button onClick={() => navigate("/buscar")}>Añadir reserva</Button>
        <Hotspot side="right" hotspotId="14" />
        </SpaceBetween>
      </SpaceBetween>
    </>
  );
}

export default Reservas;
