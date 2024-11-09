import { createContext, useContext, useState } from "react";
export const DataContext = createContext();
export function DataContextProvider(props) {
  const [realizadas, setRealizadas] = useState(0);
  const [total, setTotal] = useState(1);
  const valor= { realizadas, setRealizadas,total,setTotal };
  return (
    <DataContext.Provider value={valor}>
      {props.children}
    </DataContext.Provider>
  );
}
export function useDataContext() {
  const context = useContext(DataContext);
  return context;
}
