"use client"
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";
import Image from "next/image";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Button from "../ui/button/Button";
import Select from "../form/Select";
import FileInput from "../form/input/FileInput";

interface Category {
  id: number;
  name: string;
  image: string;
  status: string;
}

const initialCategories: Category[] = [
  {
    id: 1,
    name: "Electronics",
    image: "/images/categories/electronics.jpg",
    status: "Active",
  },
  {
    id: 2,
    name: "Fashion",
    image: "/images/categories/fashion.jpg",
    status: "Pending",
  },
  {
    id: 3,
    name: "Home & Kitchen",
    image: "/images/categories/home-kitchen.jpg",
    status: "Active",
  },
  {
    id: 4,
    name: "Beauty & Personal Care",
    image: "/images/categories/beauty.jpg",
    status: "Cancel",
  },
  {
    id: 5,
    name: "Sports & Outdoors",
    image: "/images/categories/sports.jpg",
    status: "Active",
  },
];

export default function CategoryTable() {
  const [categories, setCategories] = useState(initialCategories);
  const [newCategory, setNewCategory] = useState({
    name: "",
    image: "",
    status: "Active",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const options = [
    { value: "active", label: "Active" },
    { value: "pending", label: "Pending" },
  ];
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        console.log("Selected file:", file.name);
      }
    };
  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };

  const addCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCategory.name || !newCategory.image) return;

    const newEntry: Category = {
      id: categories.length + 1,
      ...newCategory,
    };
    setCategories([...categories, newEntry]);
    setNewCategory({ name: "", image: "", status: "Active" });
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 text-white p-2 rounded flex items-center hover:bg-blue-600">
          <FaPlus className="mr-2" /> Add Category
        </button>
      </div>
      
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Add Category</h2>
            <form onSubmit={addCategory} className="flex flex-col gap-2">
            <div>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div className="col-span-2">
                    <Label>Name</Label>
                    <Input type="text"  />
                  </div>

                  <div className="col-span-2">
                    <Label>Category Status</Label>
                    <Select
              options={options}
              placeholder="Select an option"
              onChange={handleSelectChange}
              defaultValue=""
              className="bg-gray-50 dark:bg-gray-800"
            />
                  </div>
                  

                  <div className="col-span-2">
                    <Label>Category Image</Label>
                    
        <FileInput onChange={handleFileChange} className="custom-class" />
                  </div>
                </div>
              </div>
              
            <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
              <Button size="sm" variant="outline" onClick={() => setIsModalOpen(false)}>
                Close
              </Button>
              <Button size="sm">
                Add Category
              </Button>
            </div>
            </form>
          </div>
        </div>
      )}
      
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <div className="min-w-[800px]">
            <Table>
              <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                <TableRow>
                  <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                    Image
                  </TableCell>
                  <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                    Name
                  </TableCell>
                  <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                    Status
                  </TableCell>
                  <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                    Actions
                  </TableCell>
                </TableRow>
              </TableHeader>
              <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                {categories.map((category) => (
                  <TableRow key={category.id}>
                    <TableCell className="px-5 py-4 sm:px-6 text-start">
                      <div className="w-12 h-12 overflow-hidden rounded-full">
                        <Image width={48} height={48} src={category.image} alt={category.name} />
                      </div>
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      {category.name}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      <Badge size="sm" color={category.status === "Active" ? "success" : category.status === "Pending" ? "warning" : "error"}>
                        {category.status}
                      </Badge>
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
