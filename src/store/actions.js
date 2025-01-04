import {
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  UPDATE_PROFILE,
} from "./types";

// Action Creators
export const registerUser = (userData) => ({
  type: REGISTER_USER,
  payload: userData,
});

export const loginUser = (credentials) => ({
  type: LOGIN_USER,
  payload: credentials,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const updateProfile = (profileData) => ({
  type: UPDATE_PROFILE,
  payload: profileData,
});
