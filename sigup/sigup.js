const btnBola = document.querySelector(".btn-pol");
const btnQiz = document.querySelector(".btn-pol1");
const loginBtn = document.querySelector(".loginBtn");
const createBtn = document.querySelector(".createBtn");
const form = document.querySelector(".form");
function changeColor() {
  if (btnBola.style.backgroundColor === "purple") {
    btnBola.style.backgroundColor = "blue";
  } else {
    btnBola.style.backgroundColor = "purple";
  }
}
btnBola.addEventListener("click", changeColor);

function changeColor1() {
  if (btnQiz.style.backgroundColor === "purple") {
    btnQiz.style.backgroundColor = "red";
  } else {
    btnQiz.style.backgroundColor = "purple";
  }
}
btnQiz.addEventListener("click", changeColor1);

//login

loginBtn.addEventListener("click", () => {
  window.location.href = "login.html";
});
// createBtn.addEventListener("click", () => {
//     window.location.href = "sigup.html";
//   });

//create accaunt




// }

const handLeSubmit = (e) => {
    e.preventDefault();
    const username = e.target[7].value;
    const password = e.target[6].value;
    const g1 = e.target[2].value;
    const g2 = e.target[3].value;
    const g3 = e.target[4].value;
    const g4 = e.target[5].value;
    const g5 = e.target[1].value;
    const g6 = e.target[0].value;
    //username
    const isValidUsename = /^[a-zA-Z0-9]{4,12}$/;
    const userVal = isValidUsename.test(username);
  
    //password
    const isValidPassword = /^[a-zA-Z0-9!@$%]{4,12}$/;
  //   const isValidPassword = /^[a-zA-Z0-9](?=.!@$%){4,12}$/;
    const passVal = isValidPassword.test(password);
  
  
    if (passVal && userVal) {
      localStorage.setItem("userData", JSON.stringify({ username, password,g1,g2,g3,g4,g5,g6 }));
  
      e.target.reset();
  
      window.location.href = "home.html";
    } else{
      alert("Password or User is invalid");
    }
  };

form.addEventListener("submit", handLeSubmit);
