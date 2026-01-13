// const ADMIN_PASSWORD = "admin123";

// function login() {
//   const pass = document.getElementById("adminPass").value;

//   if (pass === ADMIN_PASSWORD) {
//     // mark admin as logged in
//     localStorage.setItem("adminLoggedIn", "true");

//     // redirect to submitted details page
//     window.location.href = "submitted-details.html";
//   } else {
//     alert("Wrong password ❌");
//   }
// }


const ADMIN_PASSWORD = "admin123";

function login() {
  const pass = document.getElementById("adminPass").value;

  if (pass === ADMIN_PASSWORD) {
    localStorage.setItem("adminLoggedIn", "true");
    window.location.href = "submitted-details.html";
  } else {
    alert("Wrong password ❌");
  }
}

