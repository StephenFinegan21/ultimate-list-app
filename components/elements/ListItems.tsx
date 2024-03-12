"use client";

import { set } from "react-hook-form";
import ListForm from "./ListForm";
import { useState } from "react";
import { fetchItems } from "@/app/actions/fetchItems";

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
      <ListForm refresh={refreshData} />
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>{item.item}</li>
        ))}
      </ul>
    </>
  );
}
