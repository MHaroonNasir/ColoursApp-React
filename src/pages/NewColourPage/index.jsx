import React from "react"
import {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function NewColour({inputText, setInputText, colour, setColour, coloursList, setColoursList}) {
    const navigate = useNavigate()

    const handleInput = e => {
        setInputText(e.target.value)
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(
            `https://www.thecolorapi.com/id?hex=${inputText}`
        );
        const data = await response.json();
        console.log(data, data.hex.value, data.name.value);
        setColour(data);
        setColoursList([   
            {hex: data.hex.clean, name: data.name.value, image_url: data.image.bare},
            ...coloursList
        ])

        setInputText('')
        console.log(coloursList)
        navigate("/colours")
    };

    return (
        <>
        <h1>Add a new colour here!</h1>
        <form id="NewForm">
            <input type="text" pattern="[0-9A-Fa-f]{6}" onChange={handleInput}/>
            <button type="submit" onClick={handleSubmit}>Add Colour</button>
        </form>
        {/* <div>
            <h1>{colour.name}</h1>
        </div> */}
        </>
    );
};

export default NewColour
