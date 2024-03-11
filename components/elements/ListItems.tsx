import ListForm from "./ListForm";


type ListItemsProps = {
    items: string[];
    };

export default function ListItems({items}: ListItemsProps) {

  return (
    <>
    <ListForm />
    <ul>
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
    </>
  );
}