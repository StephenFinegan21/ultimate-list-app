import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export async function GET() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: list } = await supabase.from('list').select()
  return Response.json(list)

  }