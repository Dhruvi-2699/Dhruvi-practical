/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const MyContext = createContext([]);
export const MyContextProvider = ({ children }) => {
  const [state, setState] = useState([]);

  const updateState = (newState) => {
    setState(newState);
  };

  return (
    <MyContext.Provider value={{ state, updateState }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
