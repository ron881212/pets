const initialState = [];

const setUsers = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOG_OUT':
      // for adding log-out state to redux
      return {
        ...state,
        user: null,
      };
    case 'UPDATE_USER':
    // right here add new logic for updating the users use state.push()
  }

  return state;
};

export default setUsers;
