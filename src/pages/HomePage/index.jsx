import { Link } from 'react-router-dom';
import { useColour } from '../../contexts/Colours';

function Home() {
    const {coloursList} = useColour();

    return(
        <>
        <h1>Colours</h1>
        <div className='colour-list'>
            {coloursList.map(colour => <div key={colour.hex} className='colour-block'>
                <Link to={`/colours/${colour.hex}`} >
                    <h3 className='overrideFont linkColour'>{colour.name}</h3>
                </Link>    
                <p className='overrideFont'>{colour.hex}</p>
                <img src={colour.image_url}/>
            </div>)}
        </div>
        </>
    )
}

export default Home