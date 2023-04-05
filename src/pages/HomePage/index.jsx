function Home({coloursList}) {
    return(
        <>
        <h1>Hello</h1>
        <div>
            {coloursList.map(colour => <div>
                <h1>{colour.name}</h1>
                <p>{colour.hex}</p>
                <img src={colour.image_url}/>
            </div>)}
        </div>
        </>
    )
}

export default Home