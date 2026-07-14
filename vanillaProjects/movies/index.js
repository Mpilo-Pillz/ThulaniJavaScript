const apiKey = secret;
const imdbID = "tt0848228";

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


const onInput = async (event) => {
    const movies = await fetchData(event.target.value);
    dropdown.classList.add('is-active')
    console.log("Movies==>", movies)
    for (let movie of movies) {
        const option = document.createElement('a')
        option.innerHTML = `
        <img src="${movie.Poster}" />
        <p>${movie.Title}</p>
        `
        option.classList.add("dropdown-item")
        resultsWrapper.appendChild(option);
    }
};

input.addEventListener("input", debounce(onInput, 500));


