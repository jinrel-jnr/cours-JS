const quote = document.getElementById("quote");
const img = document.querySelector("#pic");

quote.addEventListener("click", () => {
  citationsApi();
});

const citationsApi = () => {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = `${data.content}<br><br>${data.author}`;
    });
  fetch("https://picsum.photos/1600/1000").then((res) => {
    img.innerHTML = `<img src=${res.url}>`;
  });
};
