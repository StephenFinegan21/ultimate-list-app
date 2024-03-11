type ListItemsProps = {
    items: string[];
    };

export default function ListItems({items}: ListItemsProps) {
  return (
    <ul>
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
  );
}