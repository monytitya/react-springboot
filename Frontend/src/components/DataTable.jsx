"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/Table";

export default function DataTable() {
  const tableData = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active", revenue: "$1,234" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Active", revenue: "$2,456" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", status: "Inactive", revenue: "$890" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", status: "Active", revenue: "$3,123" },
    { id: 5, name: "Charlie Davis", email: "charlie@example.com", status: "Pending", revenue: "$1,567" },
  ];

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Latest customer transactions and activity</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-muted/50">
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Revenue</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.id} className="border-border hover:bg-muted/30">
                  <TableCell className="font-medium">{row.name}</TableCell>
                  <TableCell className="text-muted-foreground">{row.email}</TableCell>
                  <TableCell>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        row.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : row.status === "Inactive"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {row.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right font-semibold">{row.revenue}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
