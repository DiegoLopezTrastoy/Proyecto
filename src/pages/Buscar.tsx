import React, { useEffect, useState } from "react";
import {
  Button,
  DateRangePicker,
  DateRangePickerProps,
  Grid,
  Hotspot,
  Select,
  SpaceBetween,
  Tiles,
  TilesProps,
} from "@cloudscape-design/components";
import { vehiculos } from "../../env";

function Buscar() {
  const [value, setValue] = React.useState("");
  const [date, setDate] = React.useState<any>(undefined);
  const [items, setItems] = useState<TilesProps.TilesDefinition[]>([]);
  const [selectedOption, setSelectedOption] = React.useState<{
    label?: string | undefined;
    value?: string | undefined;
  }>({
    label: "Una sola ocasión",
    value: "1",
  });
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
        <Hotspot side="right" hotspotId="5" />
        <Tiles
          onChange={({ detail }) => setValue(detail.value)}
          value={value}
          items={items}
        />
        <Grid gridDefinition={[{ colspan: 4 }, { colspan: 8 }]}>
          <SpaceBetween size={"xxs"} direction="horizontal">
            <DateRangePicker
              onChange={({ detail }) => setDate(detail.value)}
              rangeSelectorMode="absolute-only"
              value={date}
              i18nStrings={{ applyButtonLabel: "Aplicar" }}
              isValidRange={function (): DateRangePickerProps.ValidationResult {
                return { valid: true };
              }}
              relativeOptions={[]}
              placeholder="Seleccione fecha y tiempo"
            />
            <Hotspot side="right" hotspotId="6" />
          </SpaceBetween>
          <SpaceBetween size={"xxs"} direction="horizontal">
            <Select
              selectedOption={selectedOption}
              onChange={({ detail }) =>
                setSelectedOption(detail.selectedOption)
              }
              options={[
                { label: "Una sola ocasión", value: "1" },
                { label: "Siete días", value: "2" },
                { label: "Un mes (Solo días laborables)", value: "3" },
                { label: "Un mes completo", value: "4" },
                { label: "Un año (Solo días laborables)", value: "5" },
                { label: "Un año completo", value: "6" },
              ]}
            />
            <Hotspot side="right" hotspotId="7" />
          </SpaceBetween>
        </Grid>
        <SpaceBetween size={"xxs"} direction="horizontal">
        <Button>Buscar aparcamiento</Button>
        <Hotspot side="right" hotspotId="8" />
        </SpaceBetween>
      </SpaceBetween>
    </>
  );
}

export default Buscar;
