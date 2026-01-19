"use client"

import { Button } from "./ui/Button"; 
import { LogOut } from "lucide-react";

export default function Header({ onLogout }) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
          A
        </div>
        <h1 className="text-xl font-bold text-gray-900">Analytics Hub</h1>
      </div>
      <Button
        onClick={onLogout}
        variant="outline"
        size="sm"
        className="gap-2 bg-transparent"
      >
        <LogOut className="w-4 h-4" />
        Logout
      </Button>
    </header>
  );
}
 