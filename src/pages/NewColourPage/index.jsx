import React from "react"

function NewColour({inputText, setInputText, colour, setColour, coloursList, setColoursList}) {
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
            ...coloursList,
            {hex: data.hex.value, name: data.name.value, image_url: data.image.bare}
        ])

        setInputText('')
        
        console.log(coloursList)
    };

    return (
        <>
        <form>
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
