const apiKey = secret;
const imdbID = "tt0848228";

const fetchData = async (searchTerm) => {
    const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`
    );
    const data = await response.json()
    if (data.Error) {
        console.log("No movies found")
        return []
    }
    return data.Search
};

fecthMovieDetails = async () => {
    const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`
    );
    console.log("Movies data", await response.json());

    const data = await response.json()
    return data.Search
};



const onInput = async (event) => {
    const movies = await fetchData(event.target.value);
    console.log("Movies==>", movies)
    for (let movie of movies) {
        const div = document.createElement('div')
        div.innerHTML = `
        <img src="${movie.Poster}" />
        <h1>${movie.Title}</h1>
        `
        document.querySelector("#target").appendChild(div);
    }
};

const root = document.querySelector(".autocomplete")
root.innerHTML = `
<label><b>Search for a Movie</b></label>
    <input type="text" class="input">
    <div class="dropdown">
      <div class="dropdown-menu">
        <div class="dropdown-content results"></div>
      </div>
    </div>
`
const input = document.querySelector("input");
const dropdown = document.querySelector(".dropdown")
const resultsWrapper = document.querySelector(".results")

input.addEventListener("input", debounce(onInput, 500));

// REference:
// let timeOutID;
// const onInput = (event) => {
//     if (timeOutID) {
//         clearInterval(timeOutID) should me clearTimeout
//         console.log("we have cancelled the pending code on the event loop")
//     }
//     console.log("===this will always run to create a new timeout")
//     timeOutID = setTimeout(() => {
//         fetchData(event.target.value);
//     }, 1000)
// }

// const onInput = debounce((event) => {
//   fetchData(event.target.value);
// });
