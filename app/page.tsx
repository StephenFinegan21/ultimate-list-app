import ListItems from "@/components/elements/ListItems";
import { fetchItems } from "@/app/actions/fetchItems";


export default async function Home() {
  const list = await fetchItems();

  return (
    <main className="flex min-h-screen flex-col gap-8  p-24 max-w-[800px] mx-auto bg-gray-100">
      <h1 className="text-2xl">Ultimate List</h1>
      <ListItems items={list ?? []} />
    </main>
  );
}
