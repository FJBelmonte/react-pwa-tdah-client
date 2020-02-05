import React, { useState, useEffect } from "react";
import { Container, Header, Divider, Button } from "semantic-ui-react";
import _ from "lodash";
import { useHistory } from "react-router-dom";

import QUESTIONS from "data/questions.json";

export default () => {
  const [pSection, setPSection] = useState(4);
  const [pQuestion, setPQuestion] = useState(0);
  const [result, setResult] = useState([]);
  const history = useHistory();

  useEffect(() => {
    console.log(result);
  }, [result]);

  function handleButton() {
    const maxQuestion = _.toArray(QUESTIONS)[pSection].questions.length;
    const maxSection = _.toArray(QUESTIONS).length;

    if (pQuestion + 1 !== maxQuestion) {
      setPQuestion(pQuestion + 1);
    } else {
      if (pSection + 1 === maxSection) {
        const pResult = [...result, 1];
        history.push("/result", { data: [...pResult] });
      } else {
        setPQuestion(0);
        setPSection(pSection + 1);
      }
    }
    setResult([...result, 1]);
  }

  function renderQuestions() {
    const { questions, desc } = _.toArray(QUESTIONS)[pSection];
    const question = questions[pQuestion];

    return (
      <div>
        <Header as='h3'>{desc}</Header>
        <Divider />
        <div>
          {question}
          <div>
            <Button onClick={handleButton}>Próxima</Button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <Container text style={{ marginTop: "1em" }}>
      <Header as='h1'>Question</Header>
      {renderQuestions()}
    </Container>
  );
};
