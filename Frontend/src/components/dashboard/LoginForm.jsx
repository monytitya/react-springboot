import { useState } from "react"
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"

//token
const token = localStorage.getItem("token")

const response = await fetch(
  "http://localhost:8080/api/dashboard/stats",
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
)

export default function LoginForm({ onLoginSuccess }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    email: "Tityamony@gmail.com",
    password: "12345678"
  }),
})

      if (!response.ok) {
        throw new Error("Invalid credentials")
      }

      const data = await response.json()

      
      localStorage.setItem("token", data.token)
      onLoginSuccess(data.token)

    } catch (err) {
      setError(err.message || "Login failed")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Admin Dashboard</CardTitle>
          <CardDescription>Sign in to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Tityamony@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
