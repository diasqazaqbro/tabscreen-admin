"use client";
import useSession from "@/shared/session/useSession";
import axios from "axios";
import React, { useState } from "react";

const WidgetCreate = () => {
  const [title, setTitle] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isChecked, setChecked] = useState(false);

  const { getToken } = useSession();
  const token = getToken();

  const handleCheckbox1Change = () => {
    setChecked(!isChecked);
  };

  const handleImageChange = (event:any) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleCreateWidget = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("is_big", isChecked.toString());

    if (imageFile) {
      formData.append('image', imageFile);
    }

    // Отправляем запрос
    axios
      .post(
        "https://cloudpaymentsapi.kz/api/admin/widget/create/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
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
        Создать новый виджет
      </button>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-2xl font-bold mb-4">Создать новый виджет</h2>
            <input
              type="text"
              className="w-full border p-2 mb-4"
              placeholder="Введите название виджета"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="mb-4">
              <label>
                <input
                  className="mr-2"
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckbox1Change}
                />
                Большой виджет ?
              </label>
            </div>

            <input type="file" accept="image/*" onChange={handleImageChange} />

            <div className="flex justify-end">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={handleCreateWidget}
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

export default WidgetCreate;
