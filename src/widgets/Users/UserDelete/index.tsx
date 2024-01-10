"use client";
import useSession from "@/shared/session/useSession";
import axios from "axios";
import React, { useState } from "react";

interface UserDeleteProps {
  id: number;
  name: string
}

const UserDelete:React.FC<UserDeleteProps> = ({name, id}) => {
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
      .delete(
        `https://tabscreen-production.up.railway.app/api/admin/user/${id}/`,
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
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div>
      <button
        className="flex items-center w-[150px] rounded-md my-4 py-2 px-3 bg-red-600 text-white"
        onClick={handleOpenModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
        Удалить
      </button>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-2xl font-bold mb-4">Вы точно хотите удалить пользователя {name}</h2>
            <div className="flex justify-center">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={handleCreateGroup}
              >
                Удалить
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

export default UserDelete;
