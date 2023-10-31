(function setupCredentialsInLocalStorage() {
   localStorage.setItem("username", "madhusudan")
   localStorage.setItem("password", "md1990")
})()

function verifyLoginUser() {

   const username = document.getElementById("username").value
   const password = document.getElementById("password").value

   if (username === localStorage.getItem("username") && password === localStorage.getItem("password")) {
      window.open("resume.html", "_self")
   }
   else {
      document.getElementById("msg").innerHTML = "Invalid username/password";
   }
}

