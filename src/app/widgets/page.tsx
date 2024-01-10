import Layout from '@/widgets/Layout'
import WidgetCreate from '@/widgets/Widget/WidgetCreate'
import WidgetList from '@/widgets/Widget/WidgetList'
import React from 'react'

const page = () => {
  return (
    <Layout>
    <WidgetCreate />
    <table className="min-w-full mt-5 bg-white border border-gray-300 rounded-md overflow-hidden">
      <thead>
        <tr>
          <td>ID</td>
          <td>Заголовок</td>
          <td>Изображение</td>
          <td>Активный?</td>
        </tr>
      </thead>
      <WidgetList />
    </table>
  </Layout>
  )
}

export default page