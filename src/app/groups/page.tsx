import GroupCreate from "@/widgets/Group/GroupCreate";
import GroupList from "@/widgets/Group/GroupList";
import Layout from "@/widgets/Layout";
import axios from "axios";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <Layout>
      <GroupCreate />
      <table className="min-w-full mt-5 bg-white border border-gray-300 rounded-md overflow-hidden">
        <thead>
          <tr>
            <td>ID</td>
            <td>Заголовок</td>
            <td>Пользователи</td>
            <td>Видео</td>
          </tr>
        </thead>
        <GroupList />
      </table>
    </Layout>
  );
};

export default page;
