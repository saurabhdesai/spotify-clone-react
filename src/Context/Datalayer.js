import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import React from "react";
export const DataLayerContext = createContext();

export const Datalayer = ({ initialstate, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialstate)}>
    {children}
  </DataLayerContext.Provider>
);
export const useDatalayercontext = () => useContext(DataLayerContext);
