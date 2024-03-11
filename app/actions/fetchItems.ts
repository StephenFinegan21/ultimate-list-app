"use server"
import { createClient } from '@/utils/supabase/server';


export async function fetchItems() {
    const supabase = createClient();
    const { data: list } = await supabase.from("list").select("item"); // Select only the 'item' property
    return list && list.map(item => item.item); // Extract the 'item' property and return the array of items
  }
  