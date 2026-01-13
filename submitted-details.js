import { supabase } from "./supabase.js";

// simple admin protection
if (localStorage.getItem("adminLoggedIn") !== "true") {
  window.location.href = "admin.html";
}

async function loadSubmissions() {
  const tableBody = document.getElementById("tableBody");
  const counter = document.getElementById("submissionCount");

  const { data, error } = await supabase
    .from("submissions")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return;
  }

  // 🔢 update counter
  counter.textContent = data.length;

  tableBody.innerHTML = "";

  data.forEach(item => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${item.name}</td>
      <td>${item.phone}</td>
      <td>${item.pin}</td>
      <td>${ new Date(item.created_at + "Z").toLocaleString("en-KE", {
    timeZone: "Africa/Nairobi",
    hour12: false})}</td>
    `;

    tableBody.appendChild(tr);
  });
}


loadSubmissions();
