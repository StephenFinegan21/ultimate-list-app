import ListForm from "@/components/elements/ListForm";




export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1 className="text-6xl font-bold">Ultimate List</h1>
      <ListForm />
      
    </main>
  );
}
