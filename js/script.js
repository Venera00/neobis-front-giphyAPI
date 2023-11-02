document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.querySelector(".search-btn");
  searchButton.addEventListener("click", searchGifs);
});

async function searchGifs(event) {
  event.preventDefault();
  const input = document.querySelector(".search-input");
  const searchTerm = input.value;
  const apiKey = "Ahchf83unQ7nr78T6AWnABEDZaRNFyKU";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=100`;
  input.value = "";

  try {
    const response = await fetch(url);
    const data = await response.json();
    const gifContainer = document.getElementById("gif-container");
    gifContainer.innerHTML = "";
    data.data.forEach((gif) => {
      const gifItem = document.createElement("div");
      gifItem.className = "gif-item";
      const img = document.createElement("img");
      img.src = gif.images.fixed_height.url;
      gifItem.appendChild(img);
      gifContainer.appendChild(gifItem);
    });
  } catch (error) {
    console.error(error);
  }
}
