import React, { useState, useContext, createContext } from "react";

const ColourListContext = createContext();

export const ColourListProvider = ({ children }) => {
    const [coloursList, setColoursList] = useState([])
    

    return (
        <ColourListContext.Provider value={{ coloursList, setColoursList }}>
            {children}
        </ColourListContext.Provider>
    );
};

export const useColourList = () => useContext(ColourListContext);
