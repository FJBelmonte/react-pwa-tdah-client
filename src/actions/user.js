import { CREATE_USER } from "actions/types";

export const createUser = ({ age, gender }) => async dispatch => {
  dispatch({ type: CREATE_USER, payload: { age, gender } });
};
