import Layout from '@/widgets/Layout'
import VideoCreate from '@/widgets/Video/VideoCreate'
import VideoList from '@/widgets/Video/VideorList'
import React from 'react'

const page = () => {
  return (
    <Layout>
    <VideoCreate />
    <table className="min-w-full mt-5 bg-white border border-gray-300 rounded-md overflow-hidden">
      <thead>
        <tr>
          <td>ID</td>
          <td>Заголовок</td>
          <td>Видео</td>
        </tr>
      </thead>
      <VideoList />
    </table>
  </Layout>
  )
}

export default page