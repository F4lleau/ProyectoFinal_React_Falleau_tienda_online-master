import React, { useState, createContext } from "react";

export const RopaContext = createContext();

const initialState = [
  {
    categoria: "Mujer",
    estado: "Usado-como nuevo",
    img: "https://firebasestorage.googleapis.com/v0/b/noted-gizmo-389415.appspot.com/o/buzo%20blanco%20mujer.webp?alt=media&token=32c07760-ae08-4c13-86ad-f2e5270d5938",
    name: "Buzo blanco de algodón",
    precio: "$3000",
    talle: "M",
  },
];

export const RopaUsadaProvider = ({ children }) => {
  const [items, setItems] = useState([initialState]);

  return (
    <RopaContext.Provider value={{ items, setItems }}>
      {children}
    </RopaContext.Provider>
  );
};