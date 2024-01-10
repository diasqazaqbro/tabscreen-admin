"use client";
import useSession from "@/shared/session/useSession";
import axios from "axios";
import React, { useState } from "react";

const NewAdmin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { getToken } = useSession();
  const token = getToken();

  const handleSubmit = () => {
    axios
      .post(
        "https://tabscreen-production.up.railway.app/api/admin/create/",
        {
          username: username,
          password: password,
          role: 1,
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
      setPassword('')
      setUsername('')
      alert('Новый админ создан!')
  };
  return (
    <div className="bg-white p-6 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Создать нового админа</h2>
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
        placeholder="Введите пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="flex justify-center">
        <button
          className="bg-blue-500 text-white w-[50%] px-4 py-2 rounded-md mr-2"
          onClick={handleSubmit}
        >
          Создать
        </button>
      </div>
    </div>
  );
};

export default NewAdmin;
