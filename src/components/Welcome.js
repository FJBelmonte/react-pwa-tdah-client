import React from "react";
import { Container, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <Container text style={{ marginTop: "1em" }}>
      <Header as='h1'>Olá pessoa amável</Header>
      <p>This is a basic fixed menu template using fixed size containers.</p>
      <p>
        A text container is used for the main container, which is useful for
        single column layouts.
      </p>
      <Button as={Link} to='/id' primary>
        Continuar
      </Button>
    </Container>
  );
};
