import * as ActionType from "./../constants/ActionType";

let initialState = {
  userList: [
    {
      id: 1,
      name: "Dinh Phuc Nguyen",
      username: "dpnguyen",
      email: "dpnguyen@gmail.com",
      phoneNumber: "1123123213",
      type: "VIP"
    },
    {
      id: 2,
      name: "Nguyen Dinh Phuc",
      username: "nguyendp",
      email: "nguyendp@gmail.com",
      phoneNumber: "1123123213",
      type: "VIP"
    }
  ],
  userEdit: null,
  keyword: ""
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.DELETE:
      let userList = [...state.userList];
      let index = userList.findIndex(user => {
        return user.id === action.user.id;
      });
      if (index !== -1) {
        userList.splice(index, 1);
        state.userList = userList;
      }

      return { ...state };

    case ActionType.SUBMIT:
      if (action.user.id) {
        //UPDATE
        let index = state.userList.findIndex(user => {
          return user.id === action.user.id;
        });
        if (index !== -1) {
          let userList = [...state.userList];
          userList[index] = action.user;
          state.userList = userList;
        }
      } else {
        //ADD
        const userAdd = { ...action.user };
        userAdd.id = Math.random();
        state.userList = [...state.userList, userAdd];
      }

      return { ...state };

    case ActionType.EDIT:
      state.userEdit = action.user;
      return { ...state };

    case ActionType.SEARCH:
      state.keyword = action.keyword;
      return { ...state };

    default:
      return { ...state };
  }
};

export default userReducer;
