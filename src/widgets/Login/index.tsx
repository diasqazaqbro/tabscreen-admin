"use client";
import useSession from "@/shared/session/useSession";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Login = () => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://tabscreen-production.up.railway.app/api/admin/current_user/",
  //         {
  //           headers: {
  //             Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoyMDIwMTU2NjI2LCJpYXQiOjE3MDQ3OTY2MjYsImp0aSI6Ijc4ZmIwY2Q1Y2RhMzRhNjlhYjEwODFiM2VmMWEwN2IwIiwidXNlcl9pZCI6Nn0.o_wAFUMvnmO3pDC4OG7_KQVYYfGA20gLRxJdwTIzz0U`,
  //           },
  //         }
  //       );
  //       console.log(response);
  //     } catch (error) {
  //       console.error("Ошибка при запросе пользователя:", error);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchData();
  //   }, [])
  const {setSession,getToken} = useSession()
  const token = getToken()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://tabscreen-production.up.railway.app/api/admin/token/",
        {
          username: username,
          password: password,
        }
      );
      setSession(response.data.access)
    } catch (error) {
      console.error("Ошибка при запросе пользователя:", error);
    }
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
    <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Имя пользователя
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Введите ваше имя пользователя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Пароль
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Введите ваш пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Войти
        </button>
      </div>
    </form>
    </div>
  );
};

export default Login;
