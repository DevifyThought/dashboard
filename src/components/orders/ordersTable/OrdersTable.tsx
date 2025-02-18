"use client"
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";
import Badge from "../../ui/badge/Badge";
import { FaEdit, FaTrash } from "react-icons/fa";

const initialOrders = [
  { id: "ORD001", customer: "Customer 1", status: "Pending", total: "100" },
  { id: "ORD002", customer: "Customer 2", status: "Shipped", total: "250" },
  { id: "ORD003", customer: "Customer 3", status: "Delivered", total: "180" },
  { id: "ORD004", customer: "Customer 4", status: "Cancelled", total: "90" },
];

export default function OrdersTable() {

  return (
    <div>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <div className="min-w-[800px]">
            <Table>
              <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                <TableRow>
                  <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                    Order Id
                  </TableCell>
                  <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                    Customer
                  </TableCell>
                  <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                    Status
                  </TableCell>
                  <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                    Total
                  </TableCell>
                  <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                    Action
                  </TableCell>
                </TableRow>
              </TableHeader>
              <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                {initialOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      {order.id}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      {order.customer}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      {/* <Badge size="sm" color={order.status === "Active" ? "success" : order.status === "Pending" ? "warning" : "error"}>
                        {order.status}
                      </Badge> */}
                      <Badge color={
                      order.status === "Delivered" ? "success" :
                      order.status === "Shipped" ? "warning" :
                      order.status === "Cancelled" ? "error" : "info"
                    }>
                      {order.status}
                    </Badge>
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      {order.total}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      <div className="flex gap-3">
                        <button className="text-blue-500 hover:text-blue-700">
                          <FaEdit size={16} />
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          <FaTrash size={16} />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
