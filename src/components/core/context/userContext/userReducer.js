export const UserReducer = (state, action) => {
  switch (action.type) {
    case 'LOGOUT':
      return { ...state, user: null, userLogged: false };
    case 'LOGGED_IN':
      state.user.push({ ...action.payload });
      return { ...state, userLogged: true };
    default:
      return state;
  }
};
