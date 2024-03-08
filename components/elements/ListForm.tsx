"use client";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

export default function ListForm() {
  const form = useForm({
    defaultValues: {
      item: "",
    },
  });

  const handleAddItem = (data: { item: string }) => {
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleAddItem)} >
        <FormField
          control={form.control}
          name="item"
          render={({ field }) => (
            <div className="flex gap-8 items-center justify-center" >
              <FormItem >
                <FormControl>
                  <Input type="text" placeholder="Add an Item" {...field} />
                </FormControl>
              </FormItem>
              <Button type="submit" variant={"destructive"}>
                Add
              </Button>
              <button type="button" onClick={form.reset}>
                Reset
              </button>
            </div>
          )}
        />
      </form>
    </Form>
  );
}
