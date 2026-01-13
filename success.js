
  const userName = localStorage.getItem("submittedName");
  const userPhone = localStorage.getItem("submittedPhone");

  document.getElementById("userName").textContent = userName || "";
  document.getElementById("userPhone").textContent = userPhone || "";

  // optional: clear after display
//   localStorage.removeItem("submittedName");
//   localStorage.removeItem("submittedPhone");



 
