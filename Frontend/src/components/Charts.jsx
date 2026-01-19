
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Charts() {
  const lineData = [
    { month: "Jan", revenue: 4000, users: 2400 },
    { month: "Feb", revenue: 3000, users: 1398 },
    { month: "Mar", revenue: 2000, users: 9800 },
    { month: "Apr", revenue: 2780, users: 3908 },
    { month: "May", revenue: 1890, users: 4800 },
    { month: "Jun", revenue: 2390, users: 3800 },
  ]

  const barData = [
    { name: "Product A", sales: 4000, revenue: 2400 },
    { name: "Product B", sales: 3000, revenue: 1398 },
    { name: "Product C", sales: 2000, revenue: 9800 },
    { name: "Product D", sales: 2780, revenue: 3908 },
  ]

  const pieData = [
    { name: "Direct", value: 400 },
    { name: "Affiliate", value: 300 },
    { name: "Email", value: 200 },
    { name: "Social", value: 278 },
  ]

  const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))"]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Revenue Trend</CardTitle>
          <CardDescription>Monthly revenue and user growth</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}
                labelStyle={{ color: "hsl(var(--foreground))" }}
              />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="hsl(var(--chart-1))" name="Revenue" />
              <Line type="monotone" dataKey="users" stroke="hsl(var(--chart-2))" name="Users" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Sales by Product</CardTitle>
          <CardDescription>Product performance analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}
                labelStyle={{ color: "hsl(var(--foreground))" }}
              />
              <Legend />
              <Bar dataKey="sales" fill="hsl(var(--chart-1))" name="Sales" />
              <Bar dataKey="revenue" fill="hsl(var(--chart-2))" name="Revenue" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="shadow-sm lg:col-span-2">
        <CardHeader>
          <CardTitle>Traffic Sources</CardTitle>
          <CardDescription>Distribution of traffic by source</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={100}
                  fill="hsl(var(--primary))"
                  dataKey="value"
                >
                  {pieData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}
                  labelStyle={{ color: "hsl(var(--foreground))" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
