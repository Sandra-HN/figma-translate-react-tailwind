import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  UPDATE_PROFILE,
} from "./types";

const initialState = {
  users: [], // All registered user accounts
  currentUser: null, // The currently logged-in user
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      // Add new user to users array
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case LOGIN_USER: {
      // Destructure credentials
      const { username, password } = action.payload;
      // Find a user in the store that matches these credentials
      const user = state.users.find(
        (u) => u.username === username && u.password === password
      );
      return {
        ...state,
        currentUser: user || null, // If no match, user remains null (login fails)
      };
    }

    case LOGOUT_USER:
      return {
        ...state,
        currentUser: null,
      };

    case UPDATE_PROFILE:
      if (!state.currentUser) return state;

      // Update the currentUser with new profile data
      const updatedUser = {
        ...state.currentUser,
        ...action.payload,
      };

      // Also update the user in the users array
      const updatedUsers = state.users.map((u) =>
        u.username === state.currentUser.username ? updatedUser : u
      );

      return {
        ...state,
        users: updatedUsers,
        currentUser: updatedUser,
      };

    default:
      return state;
  }
}

export default rootReducer;
