const logout = document.querySelector("#logout");
const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const roz = document.querySelector(".roz");

const haveData = JSON.parse(localStorage.getItem("userData"));

if (!haveData){
window.location.href = "login.html";
}


logout.addEventListener("click", () => {
  localStorage.removeItem("userData");
  window.location.href = "login.html";
});



yes.addEventListener("click", () => {
  roz.style.display = "flex";
});


no.addEventListener("click", () => {
  roz.style.display = "none";
});

/////////////////////////////////////

const div = document.querySelector(".userData");

const getData = JSON.parse(localStorage.getItem("userData"));
console.log(getData.username);

const createP = document.createElement("p");
createP.innerHTML = getData.username;
createP.style.color = "white";
div.appendChild(createP);
