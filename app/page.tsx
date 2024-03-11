import ListForm from "@/components/elements/ListForm";
import ListItems from "@/components/elements/ListItems";


export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1 className="text-6xl font-bold">Ultimate List</h1>
      <ListItems items={["Item 1", "Item 2", "Item 3"]} />
      <ListForm />
      
    </main>
  );
}
