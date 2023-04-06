import React from "react"
import {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useColourList } from "../../contexts/ColourList";
import { useColour } from "../../contexts/Colours";

function NewColour({inputText, setInputText}) {
    const {colour, setColour, coloursList, setColoursList} = useColour()
    const [status, setStatus] = useState('hex')
    const navigate = useNavigate()

    const handleInput = e => {
        setInputText(e.target.value)
    }

    const handleStatus = (e) => {
        setStatus(e.target.value)
    }

    const handleSubmit = async (e) => {
        let isDuplicateColour = false;
        e.preventDefault();
        const response = await fetch(
            `https://www.thecolorapi.com/id?${status}=${inputText}`
        );
        const data = await response.json();
        console.log(data, data.hex.value, data.rgb.value, data.name.value);
        coloursList.forEach(element => {
            if (element.name == data.name.value) {
                console.log("colour already exists")
                alert("colour already exists")
                isDuplicateColour = true;
            }
        })
        
        if (isDuplicateColour == false) {
            setColour(data);
            setColoursList([   
                {hex: data.hex.clean, name: data.name.value, image_url: data.image.bare},
                ...coloursList
            ])

            setInputText('')
            console.log(coloursList)
            navigate("/colours")
        }
    };

    return (
        <>
        <h1>Add a new colour here!</h1>
        <form id="NewForm">
            <div>
                <select onChange={handleStatus} name="inputTypes" className="inputTypes">
                    <option value="hex">HEX</option>
                    <option value="rgb">RGB</option>
                </select>
            </div>

            <input id="formInput" type="text" pattern="[0-9A-Fa-f]{6}" onChange={handleInput} placeholder={`Input ${status} code`}/>
            <button type="submit" onClick={handleSubmit}>Add Colour</button>
        </form>
        {/* <div>
            <h1>{colour.name}</h1>
        </div> */}
        </>
    );
};

export default NewColour
