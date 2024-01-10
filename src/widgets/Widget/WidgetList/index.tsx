"use client";
import useSession from "@/shared/session/useSession";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import WidgetEdit from "../WidgetEdit";
import WidgetDelete from "../WidgetDelete";

interface IWidget {
  id: number;
  title: string;
  is_active: boolean;
  image: string;
}
const WidgetList = () => {
  const [Widget, setWidget] = useState([]);
  const { getToken } = useSession();
  const token = getToken();
  useEffect(() => {
    axios
      .get("https://tabscreen-production.up.railway.app/api/admin/widget/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setWidget(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [token]);
  return (
    <tbody>
      {Widget.map((item: IWidget) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>
           <img src={item.image} alt={item.title} />
          </td>
          <td>
            {item.is_active ? "Да" : "Нет("}
          </td>
          <td>
            <WidgetEdit id={item.id} />
          </td>
          <td>
            <WidgetDelete id={item.id} name={item.title} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default WidgetList;
