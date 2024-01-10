import Layout from '@/widgets/Layout'
import UserCreate from '@/widgets/Users/UserCreate'
import UserList from '@/widgets/Users/UserList'
import React from 'react'

const page = () => {
  return (
    <Layout>
      <UserCreate />
      <table className="min-w-full mt-5 bg-white border border-gray-300 rounded-md overflow-hidden">
        <thead>
          <tr>
            <td>ID</td>
            <td>Имя</td>
            <td>Группа</td>
            <td>Роль</td>
            <td>Онлайн?</td>
            <td>Mac Адрес</td>
          </tr>
        </thead>
        <UserList />
      </table>
    </Layout>
  )
}

export default page