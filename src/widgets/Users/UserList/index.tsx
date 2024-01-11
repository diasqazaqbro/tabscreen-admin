"use client";
import useSession from "@/shared/session/useSession";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import UserEdit from "../UserEdit";
import UserDelete from "../UserDelete";

interface IGroup {
  id: number;
  username: string;
  role: number;
  group: number;
  online: boolean;
  mac_address: string;
  title: string
}
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [group, setGroup] = useState<IGroup[]>([]);
  const { getToken } = useSession();
  const token = getToken();
  useEffect(() => {
    axios
      .get("https://cloudpaymentsapi.kz/api/admin/user/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Users", response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    axios
      .get("https://cloudpaymentsapi.kz/api/admin/group/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setGroup(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [token]);
  
  const returnGroup = (item:number) => {
    if (group.length > 0) {
      if (item > 0 ) {
        let answer = group.filter((i) => i.id == item)[0].title
        return answer
      } else {
        return 'no group'
      }
    }
  }
  const returnRole = (item:number) => {
    let answer = ''
    switch(item) {
      case 1:
        answer = 'Водитель'
        break
      case 2:
        answer = 'Админ'
        break
      case 3:
        answer = 'Монтажер'
        break
      case 4:
        answer = 'Техник'
        break
      case 5:
        answer = 'Видеомонтажер'
        break
    }
    return answer
  }
  return (
    <tbody>
      {users.map((item: IGroup) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.username}</td>
          <td>{returnGroup(item.group)}</td>
          <td>{returnRole(item.role)}</td>
          <td>{item.online ? "Онлайн" : "Оффлайн"}</td>
          <td>{item.mac_address}</td>
          <td>
            <UserEdit roleId={item.role} name={item.username} mac={item.mac_address} groupId={item.group} id={item.id} />
          </td>
          <td>
            <UserDelete id={item.id} name={item.username} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default UserList;
