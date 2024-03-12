"use server"
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export async function addItem(item: string) {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { error } = await supabase.from("list").insert([{ item }]);
    if (error) {
      console.error("Error inserting:", error);
    }
  }
