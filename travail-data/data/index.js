const array = ["Montpellier", "Lunel", "Laurac", "Rosière"];
const array1 = ["Montpellier", "Lunel", ["ardeche", "Laurac"], "Rosière"];

for (i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}
array.sort();
array1.sort();

// ********************************************************************
const inputYoutube = document.getElementById("inputYoutube");
const video = document.getElementById("video");
let link = "";

inputYoutube.addEventListener("input", (e) => {
  changeLink(e.target.value);

  if (link) {
    video.innerHTML = `<iframe width="650" height="345" src=${link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }
});

const changeLink = (linkToChange) => {
  let embed = linkToChange.replace("watch?v=", "embed/");
  link = embed.split("&")[0];
};
