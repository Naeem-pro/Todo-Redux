const initialstate = {
  name: "",
  isloggedin: false,
};

const user = (state = initialstate, action) => {
  switch (action.type) {
    case "LOGIN USER":
      return {
        name: action.payload.name,
        isloggedin: action.payload.isloggedin,
      };
    default:
      return state;
  }
};

export default user;
