const input = document.querySelector(".search__input");
const button = document.querySelector(".search__button");
const select = document.querySelector(".search__select");

button.addEventListener("click", submitRequest);


function submitRequest(event) {
    event.preventDefault();

    const value = input.value;
    const searchEngine = select.value;

    let params;

    if (searchEngine === "google" || searchEngine === "bing") {
        params = "search?q=";
    } else if (searchEngine === "yandex") {
        params  = "/search?text=";
    } else if (searchEngine === "duckduckgo") {
        params = "?q=";
    }

    // console.log(params);

    window.location.href = `https://www.${searchEngine}.com/${params}` + value;

}


//"https://www.google.com/search?q=поисковойЗапрос"

//"/search?q=поисковойЗапрос"

//"/search?text=поисковойЗапрос"

//"?q="
