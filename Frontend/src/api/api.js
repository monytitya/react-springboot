const token = localStorage.getItem("token");

fetch("http://localhost:8080/api/dashboard/stats", {
  headers: { Authorization: `Bearer ${token}` },
  credentials: "include", // បើ backend ប្រើ cookies, otherwise can remove
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error("Error fetching dashboard:", err));
