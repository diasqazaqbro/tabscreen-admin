"use client";
import useSession from "@/shared/session/useSession";
import axios from "axios";
import React, { useState } from "react";

interface WidgetEditProps {
  id: number;
}

const WidgetEdit: React.FC<WidgetEditProps> = ({id}) => {
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
      .put(
        `https://cloudpaymentsapi.kz/api/admin/widget/${id}/`,
        {
          title: title,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
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
        onClick={handleOpenModal}
        className="flex items-center rounded-md my-4 py-2 px-3 bg-primary text-white cursor-pointer"
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
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
        Редактировать
      </button>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-2xl font-bold mb-4">Редактировать виджет</h2>
            <input
              type="text"
              className="w-full border p-2 mb-4"
              placeholder="Введите имя"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="flex justify-end">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={handleCreateGroup}
              >
                Редактировать
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

export default WidgetEdit;
