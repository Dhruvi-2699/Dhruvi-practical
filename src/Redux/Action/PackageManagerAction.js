import { ADD_PACKAGE, UPDATE_LOCATION, UPDATE_STATUS } from "../Types";

export const AddPackageManager = (payload) => ({
  type: ADD_PACKAGE,
  payload,
});

export const UpdateStatus = (payload) => ({
  type: UPDATE_STATUS,
  payload,
});
export const UpdateLocation = (payload) => ({
  type: UPDATE_LOCATION,
  payload,
});
