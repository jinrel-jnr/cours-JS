// ****************************** Toggle & setTimeOut *********************************************** //

const btn = document.querySelector("#btn");
const btn2 = document.querySelector("#btn2");
const img = document.getElementById("img");

let count = 0;
document.querySelector(".inputEvent").style.display = "none";

btn.addEventListener("click", () => {
  btn.innerHTML = "Encore ?";
  count += 1;
  if (count > 5) {
    document.getElementById("troll").innerHTML =
      "Mais tu as fini de spammer le bouton !? :)";
    btn.innerHTML = "Sûr de recommencer ?";
    count += 1;
    if (count > 6) {
      document.getElementById("troll").innerHTML =
        "En plus tu insistes !! Rooh ! Bon allez zou plus de bouton!";
      btn.style.display = "none";
      setTimeout(() => {
        document.getElementById("troll2").innerHTML =
          "Mais tu peux répondre à la question juste en dessous :)";
        img.classList.toggle("show");
        setTimeout(() => {
          document.querySelector(".inputEvent").style.display = "block";
        }, 800);
      }, 900);
    }
  } else {
    img.classList.toggle("show");
  }
});

// *****************************************   Mouse Move   ********************************************* //
const mouseEvent = document.querySelector(".mouseEvent");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");

mouseEvent.addEventListener("mousemove", (e) => {
  horizontal.innerHTML = e.x;
  vertical.innerHTML = e.y;
  mouseEvent.style.left = (e.x / window.innerWidth) * 100 + "%";
  if (e.x > 800) {
    document.body.style.filter = "blur(3px)";
  } else {
    document.body.style.filter = "none";
  }
});

// ********************************   INPUT   ************************************ //

const input = document.querySelector("#input");
input.addEventListener("input", (e) => {
  console.log("yes " + e.target.value);
  vertical.innerHTML = e.target.value;
});

// ********************************   SETTING THEME COLOR   ************************************ //
const theme = document.querySelectorAll(".theme");

theme.forEach((item) => {
  item.addEventListener("click", (e) => {
    // Theme style reset
    document.body.classList.remove("darkTheme", "yellowTheme", "salmonTheme");

    switch (e.target.id) {
      case "dark":
        document.body.classList.add("darkTheme");
        break;
      case "salmon":
        document.querySelector(".mouseEvent").style.borderColor = "white";
        document.body.classList.add("salmonTheme");
        break;

      case "yellow":
        document.querySelector(".mouseEvent").style.borderColor = "salmon";
        document.body.classList.add("yellowTheme");
        break;

      default:
        null;
    }
  });
});

// Suite sur les API & AJAX
