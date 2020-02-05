import React from "react";
import { Container, Header } from "semantic-ui-react";

export default props => {
  console.log(props.location.state.data);
  return (
    <Container text style={{ marginTop: "1em" }}>
      <Header as='h1'>Ola pessoa amável</Header>
    </Container>
  );
};
