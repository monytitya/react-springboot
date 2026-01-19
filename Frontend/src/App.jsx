import { useState, useEffect } from "react"
import LoginForm from "./components/dashboard/LoginForm";
import DashboardLoginForm from "./components/dashboard/LoginForm";
import Dashboard from "./components/Dashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("authToken")
    setIsAuthenticated(!!token)
    setIsLoading(false)
  }, [])

  const handleLogin = (token) => {
    localStorage.setItem("authToken", token)
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    setIsAuthenticated(false)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }
function App() {
  const [token, setToken] = useState(
    localStorage.getItem("token")
  )

  if (!token) {
    return <LoginForm onLoginSuccess={setToken} />
  }

  return <Dashboard />
}
  return (
    <>
      {isAuthenticated ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <LoginForm onLoginSuccess={handleLogin} />
      )}
      
    </>
  )
}

export default App
