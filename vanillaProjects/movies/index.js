
const fetchData = async () => {
    const movies = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=avengers`)
    console.log("Movies", await movies.json())
}

fetchData()