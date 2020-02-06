import { CREATE_USER } from "actions/types";

const INITIAL_STATE = {
  gender: "",
  age: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
