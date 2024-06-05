import React, { useState } from "react";
import {
  Container,
  Header,
  Form,
  FormField,
  Input,
  Textarea,
  Button,
  SpaceBetween,
  Hotspot,
  Grid,
} from "@cloudscape-design/components";
import { useNavigate } from "react-router-dom";

const Contactanos: React.FC = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

  return (
    <Container>
      <Header variant="h1">Contacto</Header>
      <Form
        actions={
          <SpaceBetween direction="horizontal" size="xs">
            <Button variant="link" onClick={() => navigate("/")}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={() => navigate("/")}>
              Enviar
            </Button>
          </SpaceBetween>
        }
      >
        <FormField label="Nombre" description="Introduce tu nombre completo">
          <Grid gridDefinition={[{ colspan: 11 }]}>
            <Input
              placeholder="Nombre"
              value={nombre}
              onChange={({ detail }) => setNombre(detail.value)}
            />
            <Hotspot side="right" hotspotId="15" />
          </Grid>
        </FormField>

        <FormField
          label="Correo Electrónico"
          description="Introduce tu correo electrónico"
        >
          <Grid gridDefinition={[{ colspan: 11 }]}>
            <Input
              type="email"
              placeholder="Correo Electrónico"
              value={correo}
              onChange={({ detail }) => setCorreo(detail.value)}
            />
            <Hotspot side="right" hotspotId="16" />
          </Grid>
        </FormField>

        <FormField label="Asunto" description="El asunto de tu mensaje">
          <Grid gridDefinition={[{ colspan: 11 }]}>
            <Input
              placeholder="Asunto"
              value={asunto}
              onChange={({ detail }) => setAsunto(detail.value)}
            />
            <Hotspot side="right" hotspotId="17" />
          </Grid>
        </FormField>

        <FormField label="Mensaje" description="El contenido de tu mensaje">
          <Grid gridDefinition={[{ colspan: 11 }]}>
            <Textarea
              placeholder="Escribe tu mensaje aquí..."
              value={mensaje}
              onChange={({ detail }) => setMensaje(detail.value)}
            />
            <Hotspot side="right" hotspotId="18" />
          </Grid>
        </FormField>
      </Form>
    </Container>
  );
};

export { Contactanos as Component, Contactanos as default };
