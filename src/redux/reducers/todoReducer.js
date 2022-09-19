const intialState = [];

const todoReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todoReducer;
