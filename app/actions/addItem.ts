"use server"
import { createClient } from '@/utils/supabase/server';
const supabase = createClient();

export async function addItem(item: string) {
    "use server"
    const { error } = await supabase.from("list").insert([{ item }]);
    if (error) {
      console.error("Error inserting:", error);
    }
  }
