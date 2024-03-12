// ListForm.tsx
"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { addItem } from "@/app/actions/addItem";

export default function ListForm({ refresh }: any) {
  const [item, setItem] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await addItem(item); // Invoking addItem function with the item value
    refresh(); // Refresh the list
    setItem(""); // Clear the input field after adding item
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItem(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full  flex gap-8 items-center justify-center">
        <Input
          type="text"
          placeholder="Add an Item"
          value={item}
          onChange={handleChange}
        />
        <Button type="submit">Add</Button>
      </div>
    </form>
  );
}
