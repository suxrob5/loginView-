const form = document.getElementById("form");
const sigUpBtn = document.querySelector(".loginBtn")

//check if location is available

const getData = JSON.parse(localStorage.getItem("userData"));

if (getData) {
  window.location.href = "home.html";
}

const handLeSubmit = (e) => {
  e.preventDefault();
  const username = e.target[0].value;
  const password = e.target[1].value;
  //username
  const isValidUsename = /^[a-zA-Z0-9]{4,12}$/;
  const userVal = isValidUsename.test(username);

  //password
  const isValidPassword = /^[a-zA-Z0-9!@$%]{4,12}$/;
//   const isValidPassword = /^[a-zA-Z0-9](?=.!@$%){4,12}$/;
  const passVal = isValidPassword.test(password);


  if (passVal && userVal) {
    localStorage.setItem("userData", JSON.stringify({ username, password }));

    e.target.reset();

    window.location.href = "home.html";
  } else{
    alert("Password or User is invalid")
  }
};

//events
form.addEventListener("submit", handLeSubmit);




sigUpBtn.addEventListener("click", () => {
    window.location.href = "sigup.html";
});