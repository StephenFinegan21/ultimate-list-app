"use server"
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export async function fetchItems() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: list } = await supabase.from('list').select()
  return list
  }
  