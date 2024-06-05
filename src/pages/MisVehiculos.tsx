import {
  Button,
  Cards,
  Container,
  Form,
  FormField,
  Grid,
  Hotspot,
  Input,
  SpaceBetween,
  Tabs,
} from "@cloudscape-design/components";
import { vehiculos } from "../../env";
import { useState } from "react";

function MisVehiculos() {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [activeTab, setActiveTab] = useState("first");

  return (
    <>
      <h1>Vehiculos</h1>
      <Tabs
        activeTabId={activeTab}
        onChange={({ detail }) => setActiveTab(detail.activeTabId)}
        tabs={[
          {
            label: (
              <>
                Ver mis vehiculos
                <Hotspot side="right" hotspotId="9" />
              </>
            ),
            id: "first",
            content: (
              <Cards
                ariaLabels={{
                  itemSelectionLabel: (_e, t) =>
                    `select ${t.marca + " " + t.modelo}`,
                  selectionGroupLabel: "",
                }}
                cardDefinition={{
                  header: (item) => <>{item.marca + " " + item.modelo}</>,
                  sections: [
                    {
                      id: "Marca",
                      header: "Marca",
                      content: (item) => item.marca,
                    },
                    {
                      id: "Modelo",
                      header: "Modelo",
                      content: (item) => item.modelo,
                    },
                  ],
                }}
                cardsPerRow={[{ cards: 1 }, { minWidth: 200, cards: 5 }]}
                items={vehiculos}
                visibleSections={["Marca", "Modelo"]}
              />
            ),
          },
          {
            label: "Añadir vehiculo",
            id: "second",
            content: (
              <>
                <form onSubmit={(e) => e.preventDefault()}>
                  <Form
                    actions={
                      <SpaceBetween direction="horizontal" size="xs">
                        <Button
                          formAction="none"
                          variant="link"
                          onClick={() => setActiveTab("first")}
                        >
                          Cancelar
                        </Button>
                        <Grid gridDefinition={[{ colspan: 9 }, { colspan: 1}]}>
                          <Button
                            variant="primary"
                            onClick={() => setActiveTab("first")}
                          >
                            Enviar
                          </Button>
                          <Hotspot side="right" hotspotId="12" />

                        </Grid>
                      </SpaceBetween>
                    }
                  >
                    <Container>
                      <SpaceBetween direction="vertical" size="l">
                        <FormField label="Marca">
                          <Grid gridDefinition={[{ colspan: 11 }]}>
                            <Input
                              value={marca}
                              onChange={({ detail }) => setMarca(detail.value)}
                            />
                            <Hotspot side="right" hotspotId="10" />
                          </Grid>
                        </FormField>
                        <FormField label="Modelo">
                          <Grid gridDefinition={[{ colspan: 11 }]}>
                            <Input
                              value={modelo}
                              onChange={({ detail }) => setModelo(detail.value)}
                            />
                            <Hotspot side="right" hotspotId="11" />
                          </Grid>
                        </FormField>
                      </SpaceBetween>
                    </Container>
                  </Form>
                </form>
              </>
            ),
          },
        ]}
      />
    </>
  );
}

export { MisVehiculos as Component, MisVehiculos as default };
