"use client";
import useSession from "@/shared/session/useSession";
import axios from "axios";
import React, { useState } from "react";

const GroupCreate = () => {
  const [title, setTitle] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
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
        "https://cloudpaymentsapi.kz/api/admin/group/create/",
        {
          title: title,
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

  return (
    <div>
      <button
        className="rounded-md my-4 py-2 px-3 bg-primary text-white"
        onClick={handleOpenModal}
      >
        Создать новую группу
      </button>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-2xl font-bold mb-4">Создать новую группу</h2>
            <input
              type="text"
              className="w-full border p-2 mb-4"
              placeholder="Введите название группы"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
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

export default GroupCreate;
