const intialState = [];

const todoReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "DELETE_TODO":
      const newState = state.filter((todo) => todo.id !== action.payload);
      return newState;
    case "UPDATE_TODO":
      let updatedState = state.filter((todo) => todo.id != action.payload.id);
      return [...updatedState, action.payload];
    default:
      return state;
  }
};

export default todoReducer;
