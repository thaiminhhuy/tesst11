import * as ActionType from "./../constants/ActionType";

export const actDeleteUser = user => {
  return {
    type: ActionType.DELETE,
    user
  };
};

export const actEditUser = user => {
  return {
    type: ActionType.EDIT,
    user
  };
};

export const actSubmit = user => {
  return {
    type: ActionType.SUBMIT,
    user
  };
};

export const actKeyword = keyword => {
  return {
    type: ActionType.SEARCH,
    keyword
  };
};
