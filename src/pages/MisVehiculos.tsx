import {
  Button,
  Cards,
  Container,
  Form,
  FormField,
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
            label: "Ver mis vehiculos",
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
                          Cancel
                        </Button>
                        <Button
                          variant="primary"
                          onClick={() => setActiveTab("first")}
                        >
                          Submit
                        </Button>
                      </SpaceBetween>
                    }
                  >
                    <Container>
                      <SpaceBetween direction="vertical" size="l">
                        <FormField label="Marca">
                          <Input
                            value={marca}
                            onChange={({ detail }) => setMarca(detail.value)}
                          />
                        </FormField>
                        <FormField label="Modelo">
                          <Input
                            value={modelo}
                            onChange={({ detail }) => setModelo(detail.value)}
                          />
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
