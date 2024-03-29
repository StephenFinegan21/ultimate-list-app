"use client";
import ListForm from "./ListForm";
import { useState } from "react";
import ListItem from "./ListItem";

type ListItemProps = {
  id: number;
  created_at: string;
  item: string;
};

export default function ListItems({ items }: { items: ListItemProps[] }) {
  const [listItems, setListItems] = useState<ListItemProps[]>(items);

  const refreshData = async () => {
    const res = await fetch("/api/list/");
    const data = await res.json();
    data && setListItems(data);
  };

  return (
    <>
      
      <ul className="w-full text-left py-4 flex flex-col gap-2">
        {listItems.map((item, index) => (
          <ListItem key={index} text={item.item} />
        ))}
      </ul>
      <ListForm refresh={refreshData} />
    </>
  );
}
