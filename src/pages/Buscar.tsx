import React, { useEffect, useState } from "react";
import {
  Button,
  DateRangePicker,
  DateRangePickerProps,
  SpaceBetween,
  Tiles,
  TilesProps,
} from "@cloudscape-design/components";
import { vehiculos } from "../../env";

function Buscar() {
  const [value, setValue] = React.useState("");
  const [date, setDate] = React.useState<any>(undefined);
  const [items, setItems] = useState<TilesProps.TilesDefinition[]>([]);
  useEffect(() => {
    setItems(
      vehiculos.map((val) => {
        return {
          label: val.marca + " " + val.modelo,
          value: val.id.toString(),
        };
      })
    );
  }, []);
  return (
    <>
      <div></div>
      <h1>Buscar</h1>

      <p>Seleccione un vehiculo</p>
      <SpaceBetween size={"m"}>
        <Tiles
          onChange={({ detail }) => setValue(detail.value)}
          value={value}
          items={items}
        />
        <DateRangePicker
          onChange={({ detail }) => setDate(detail.value)}
          rangeSelectorMode="absolute-only"
          value={date} isValidRange={(function (): DateRangePickerProps.ValidationResult {
            throw new Error("Function not implemented.");
          }) } relativeOptions={[]}
          placeholder="Seleccione fecha y tiempo"/>
        <Button>Buscar aparcamiento</Button>
      </SpaceBetween>
    </>
  );
}

export default Buscar;
