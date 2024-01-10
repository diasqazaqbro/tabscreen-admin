"use client";
import useSession from "@/shared/session/useSession";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface IGroup {
  id: number;
  title: string;
}

const UserCreate = () => {
  const [username, setUsername] = useState<string>("");
  const [macAddress, setMacAddress] = useState<string>("");
  const [getGroup, setGetGroup] = useState<IGroup[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<number>(0);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const { getToken } = useSession();
  const token = getToken();

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleCreateGroup = () => {
    axios
      .post(
        "https://tabscreen-production.up.railway.app/api/admin/user/create/",
        {
          username: username,
          mac_address: macAddress,
          group: selectedGroup,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log("Data received:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleGroupChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGroup(Number(event.target.value));
  };

  useEffect(() => {
    axios
      .get("https://tabscreen-production.up.railway.app/api/admin/group/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setGetGroup(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [token]);

  return (
    <div>
      <button
        className="rounded-md my-4 py-2 px-3 bg-primary text-white"
        onClick={handleOpenModal}
      >
        Создать нового пользователя
      </button>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-2xl font-bold mb-4">
              Создать нового пользователя
            </h2>
            <input
              type="text"
              className="w-full border p-2 mb-4"
              placeholder="Введите имя"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              className="w-full border p-2 mb-4"
              placeholder="Введите Мак Адрес"
              value={macAddress}
              onChange={(e) => setMacAddress(e.target.value)}
            />
            <select value={selectedGroup} onChange={handleGroupChange}>
              <option value={0} disabled hidden>
                Выберите группу
              </option>
              {getGroup.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
            <div className="flex justify-end">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={handleCreateGroup}
              >
                Создать
              </button>
              <button
                className="bg-gray-300 px-4 py-2 rounded-md"
                onClick={handleCloseModal}
              >
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCreate;
