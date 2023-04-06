import React, { useState, useContext, createContext } from "react";

const ColourContext = createContext();

export const ColourProvider = ({ children }) => {
    const [colour, setColour] = useState([])
    

    return (
        <ColourContext.Provider value={{ colour, setColour }}>
            {children}
        </ColourContext.Provider>
    );
};

export const useColour = () => useContext(ColourContext);