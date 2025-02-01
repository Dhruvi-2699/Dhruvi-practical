import { ADD_PACKAGE, UPDATE_LOCATION, UPDATE_STATUS } from "../Types";

const initialState = {
  packageList: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PACKAGE:
      return { packageList: [...state.packageList, payload] };
    case UPDATE_STATUS:
      const updatedPackage = state.packageList.map((p) => {
        if (p.packageId === payload.packageId) {
          return {
            ...p,
            currentLoaction: payload?.updateValue.currentLoaction,
            updateStatus: payload?.updateValue.updateStatus,
          };
        } else {
          return p;
        }
      });
      return {
        packageList: updatedPackage,
      };
    case UPDATE_LOCATION:
      const updatedLocation = state.packageList.map((p) => {
        if (p.packageId === payload.packageId) {
          return {
            ...p,
            currentLoaction: payload?.updateValue.currentLoaction,
          };
        } else {
          return p;
        }
      });
      return {
        packageList: updatedLocation,
      };

    default:
      return state;
  }
};
