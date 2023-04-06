import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import { useColour } from '../../contexts/Colours';

function ViewColour() {
    const {colour, setColour, coloursList, setColoursList} = useColour()
    const {hex} = useParams();
    // console.log("hex:", hex);
    const navigate = useNavigate()
    
    useEffect(() => {
        fetchDetails()
      }, [])

    const fetchDetails = async () => {
        const response = await fetch(`https://www.thecolorapi.com/id?hex=${hex}`)
        const results = await response.json()
        setColour(results);
        // console.log("setcolour:", colour)
    }

    /*coloursList.forEach(element => {
        if (element.hex == hex) {
            setColour(element)
        }
    });*/

    const handleDelete = () => {
        let newColours = coloursList.filter((item) => item.name !== colour.name.value)
        console.log("colour: ", colour)
        console.log("newcolour", newColours)
        setColoursList(newColours)
        navigate("/colours")
    }

    return (
        <>
        <div>
            <h1>View Page</h1>
            <h3 className='overrideFont'>{colour.name.value}</h3>   
            <p className='overrideFont'>{colour.hex.clean}</p>
            <img src={colour.image.bare}/>
        </div>
        <button onClick={() => navigate("/colours")}>Back</button>
        <button onClick={handleDelete}>Delete Colour</button>
        </>
    )
}

export default ViewColour