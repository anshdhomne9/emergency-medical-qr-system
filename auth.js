function register() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  localStorage.setItem("user", JSON.stringify({ username, password }));
  alert("Registered Successfully!");
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.username === username && user.password === password) {
    localStorage.setItem("loggedInUser", username);
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid Credentials");
  }
}