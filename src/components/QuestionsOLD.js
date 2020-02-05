import React, { useState } from "react";
import { Container, Header, Divider, Button } from "semantic-ui-react";
import _ from "lodash";
import { useHistory } from "react-router-dom";

import QUESTIONS from "data/questions.json";

// usar pointer para mostrar qual question está visivel

export default () => {
  const [pointerSection, setPointerSection] = useState(4);
  const [pointerQuestion, setPointerQuestion] = useState(0);
  let history = useHistory();

  function renderQuestions() {
    const sectionLength = _.toArray(QUESTIONS).length;
    function renderSectionQuestions(questions) {
      const questionsLength = _.toArray(questions).length;

      return _.toArray(questions).map((question, index) => {
        return (
          index === pointerQuestion && (
            <div key={index}>
              {question}

              <div>
                <Button
                  onClick={e => {
                    e.preventDefault();
                    if (index + 1 < questionsLength) {
                      setPointerQuestion(pointerQuestion + 1);
                    } else {
                      setPointerSection(pointerSection + 1);
                      setPointerQuestion(0);
                    }
                  }}>
                  Próxima
                </Button>
              </div>
            </div>
          )
        );
      });
    }
    return _.toArray(QUESTIONS).map((section, index) => {
      return (
        <div key={index}>
          {index === pointerSection && (
            <div>
              <Header as='h3'>{section.desc}</Header>
              <Divider />
              <div>{renderSectionQuestions(section.questions)}</div>
            </div>
          )}
        </div>
      );
    });
  }

  return (
    <Container text style={{ marginTop: "1em" }}>
      <Header as='h1'>Question</Header>
      <div>{renderQuestions()}</div>
    </Container>
  );
};
