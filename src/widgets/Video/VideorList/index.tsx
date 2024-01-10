"use client";
import useSession from "@/shared/session/useSession";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import VideoEdit from "../VideoEdit";
import VideoDelete from "../VideoDelete";

interface IVideo {
  id: number;
  title: string
}
const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const { getToken } = useSession();
  const token = getToken();
  useEffect(() => {
    axios
      .get("https://tabscreen-production.up.railway.app/api/admin/video/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [token]);
  return (
    <tbody>
      {videos.map((item: IVideo) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>тут я еще не сделал видео</td>
          <td>
            <VideoEdit id={item.id} />
          </td>
          <td>
            <VideoDelete id={item.id} name={item.title} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default VideoList;
