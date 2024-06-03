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
} from "@cloudscape-design/components";
import { useNavigate } from "react-router-dom";

const Contactanos: React.FC = () => {

  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  return (
    <Container>
      <Header variant="h1">Contacto</Header>
      <Form
        actions={
          <SpaceBetween direction="horizontal" size="xs">
            <Button variant="link" onClick={()=>navigate('/')}>Cancelar</Button>
            <Button variant="primary" onClick={()=>navigate('/')}>Enviar</Button>
          </SpaceBetween>
        }
      >
        <FormField label="Nombre" description="Introduce tu nombre completo">
          <Input placeholder="Nombre" value={nombre} onChange={({detail})=> setNombre(detail.value)}/>
        </FormField>

        <FormField
          label="Correo Electrónico"
          description="Introduce tu correo electrónico"
        >
          <Input type="email" placeholder="Correo Electrónico" value={correo} onChange={({detail})=> setCorreo(detail.value)} />
        </FormField>

        <FormField label="Asunto" description="El asunto de tu mensaje">
          <Input placeholder="Asunto" value={asunto} onChange={({detail})=> setAsunto(detail.value)} />
        </FormField>

        <FormField label="Mensaje" description="El contenido de tu mensaje">
          <Textarea placeholder="Escribe tu mensaje aquí..." value={mensaje} onChange={({detail})=> setMensaje(detail.value)} />
        </FormField>
      </Form>
    </Container>
  );
};

export { Contactanos as Component, Contactanos as default };