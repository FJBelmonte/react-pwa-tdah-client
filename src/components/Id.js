import React, { useState } from "react";
import {
  Container,
  Header,
  Form,
  Button,
  Grid,
  Input
} from "semantic-ui-react";

import { useHistory } from "react-router-dom";

const options = [
  { key: "m", text: "Masculino", value: "male" },
  { key: "f", text: "Feminino", value: "female" },
  { key: "o", text: "Outros", value: "other" }
];

export default () => {
  let history = useHistory();
  function handleButtonContinue() {
    history.push("/questions");
  }
  function handleButtonSkip() {
    history.push("/");
  }
  return (
    <Container text style={styles.container}>
      <Header as='h1'>Id</Header>
      <Form>
        <Form.Group widths='equal'>
          <Form.Field control={Input} label='Idade' placeholder='Idade' />
          <Form.Select
            fluid
            label='Gênero'
            options={options}
            placeholder='Gênero'
          />
        </Form.Group>
        <Grid columns={2}>
          <Grid.Column stretched>
            <Button
              negative
              style={styles.buttonStyle}
              onClick={handleButtonSkip}>
              Pular
            </Button>
          </Grid.Column>
          <Grid.Column stretched>
            <Button
              positive
              style={styles.buttonStyle}
              onClick={handleButtonContinue}>
              Continuar
            </Button>
          </Grid.Column>
        </Grid>
      </Form>
    </Container>
  );
};

const styles = {
  container: {
    marginTop: "1em"
  },
  buttonStyle: {
    height: 50,
    cursor: "pointer",
    display: "block",
    width: "100%"
  }
};
