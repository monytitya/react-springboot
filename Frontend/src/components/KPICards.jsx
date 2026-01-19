"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card"
import { TrendingUp, Users, DollarSign, Activity } from "lucide-react"

export default function KPICards({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((kpi) => (
        <Card key={kpi.title} className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
            <kpi.icon className={`w-4 h-4 ${kpi.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{kpi.value}</div>
            <p className="text-xs text-green-600 mt-1">{kpi.change} from last month</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
