export default function ListItem({text}: {text: string}) {
  return (
    <>
      <li className=" bg-slate-50 rounded-sm p-4">{text}</li>
    </>
  );
}