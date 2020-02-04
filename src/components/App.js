import React from "react";
import { Menu, Segment, Header, Container } from "semantic-ui-react";
import { BrowserRouter, Link, Route } from "react-router-dom";

import Welcome from "components/Welcome";
import Id from "components/Id";
import Questions from "components/Questions";
import Result from "components/Result";
import Data from "components/Data";

export default () => {
  return (
    <div style={styles.container}>
      <Menu inverted>
        <Menu.Item header>TDAH-TESTE</Menu.Item>
      </Menu>
      <BrowserRouter>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/id' component={Id} />
        <Route exact path='/questions' component={Questions} />
        <Route exact path='/result' component={Result} />
        <Route exact path='/data' component={Data} />
      </BrowserRouter>
      <Segment attached='bottom' inverted vertical style={styles.footer}>
        <Container textAlign='center'>TDAH TESTE - 2020</Container>
      </Segment>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f5f5f5"
  },
  footer: {
    margin: "5em 0em 0em",
    padding: "5em 0em"
  }
};
