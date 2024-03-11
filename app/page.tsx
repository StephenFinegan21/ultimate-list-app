import ListItems from "@/components/elements/ListItems";
import { fetchItems } from "@/app/actions/fetchItems";

export default async function Home() {
  const list = await fetchItems();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1 className="text-6xl font-bold">Ultimate List</h1>
      <ListItems items={list ?? []} />
    </main>
  );
}
