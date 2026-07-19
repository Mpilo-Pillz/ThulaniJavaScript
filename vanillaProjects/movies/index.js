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
    const placeholder = "https://media.istockphoto.com/id/1980276924/vector/no-photo-thumbnail-graphic-element-no-found-or-available-image-in-the-gallery-or-album-flat.jpg?s=612x612&w=0&k=20&c=ZBE3NqfzIeHGDPkyvulUw14SaWfDj2rZtyiKv3toItk="


    if (!movies.length) {
        dropdown.classList.remove('is-active')
        return
    }
    resultsWrapper.innerHTML = ''
    dropdown.classList.add('is-active')

    for (let movie of movies) {
        const option = document.createElement('a')
        option.classList.add("dropdown-item")
        // debugger
        const moviePoster = movie.Poster.indexOf('http') === -1 ? placeholder : movie.Poster
        option.innerHTML = `
        <img src="${moviePoster}" />
        <p>${movie.Title}</p>
        `

        resultsWrapper.appendChild(option);
    }
};

input.addEventListener("input", debounce(onInput, 500));

document.addEventListener('click', (event) => {
    console.log(event.target);
    console.log(root.contains(event.target));
    if (!root.contains(event.target)) {
        dropdown.classList.remove('is-active')
    }

})


