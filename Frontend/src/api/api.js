import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:8080/api/dashboard/stats", {
      headers: { Authorization: `Bearer ${token}` },
      credentials: "include", // ប្រើបើ backend មាន cookies
    })
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error("Error fetching dashboard:", err));
  }, []);

  if (!stats) return <div>Loading...</div>;

  return (
    <div>
      <h1>Dashboard Stats</h1>
      <pre>{JSON.stringify(stats, null, 2)}</pre>
    </div>
  );
}
