"use client"

import React from "react"
import { LayoutDashboard, BarChart3, Settings, Users, Activity, Menu, X } from "lucide-react"
import { Button } from "./ui/Button" // fixed relative path

export default function Sidebar({ open, onToggle }) {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: BarChart3, label: "Analytics" },
    { icon: Activity, label: "Performance" },
    { icon: Users, label: "Users" },
    { icon: Settings, label: "Settings" },
  ]

  return (
    <div
      className={`${
        open ? "w-64" : "w-20"
      } bg-sidebar border-r border-sidebar-border transition-all duration-300 flex flex-col`}
    >
      {/* Header toggle */}
      <div className="p-4 flex items-center justify-between">
        {open && <span className="font-bold text-sidebar-foreground">Menu</span>}
        <Button variant="ghost" size="sm" onClick={onToggle} className="h-8 w-8 p-0">
          {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              item.active
                ? "bg-sidebar-primary text-sidebar-primary-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent"
            }`}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {open && <span className="text-sm font-medium">{item.label}</span>}
          </button>
        ))}
      </nav>
    </div>
  )
}
