import { useState, useEffect } from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"
import KPICards from "./KPICards"
import Charts from "./Charts";
import DataTable from "./DataTable";

export default function Dashboard({ onLogout }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [dashboardData, setDashboardData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token") // ✅ FIXED

        if (!token) {
          onLogout()
          return
        }

        const response = await fetch(
          "http://localhost:8080/api/dashboard/stats",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )

        if (!response.ok) {
          throw new Error("Unauthorized")
        }

        const data = await response.json()
        setDashboardData(data)
      } catch (err) {
        console.error("Failed to fetch dashboard data:", err)
        onLogout() // logout if token invalid
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [onLogout])

  if (loading) {
    return <div className="p-6">Loading dashboard...</div>
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar
        open={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header onLogout={onLogout} />

        <main className="flex-1 overflow-auto">
          <div className="p-6 space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back to your admin panel
              </p>
            </div>

            <KPICards data={dashboardData} />
            <Charts data={dashboardData} />
            <DataTable />
          </div>
        </main>
      </div>
    </div>
  )
}
