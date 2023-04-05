import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';

function ViewColour({colour, setColour, coloursList}) {
    const {hex} = useParams();
    console.log("hex:", hex);
    
    useEffect(() => {
        fetchDetails()
      }, [])

    const fetchDetails = async () => {
        const response = await fetch(`https://www.thecolorapi.com/id?hex=${hex}`)
        const results = await response.json()
        setColour(results);
        console.log("setcolour:", colour)
    }

    /*coloursList.forEach(element => {
        if (element.hex == hex) {
            setColour(element)
        }
    });*/

    return (
        <>
        <div>
            <h1>View Page</h1>
            <h3 className='overrideFont'>{colour.name.value}</h3>   
            <p className='overrideFont'>{colour.hex.clean}</p>
            <img src={colour.image.bare}/>
        </div>
        <button onClick={() => navigate("/colours")}>Back</button>
        </>
    )
}

export default ViewColour