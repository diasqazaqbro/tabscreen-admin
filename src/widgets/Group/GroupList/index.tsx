"use client";
import useSession from "@/shared/session/useSession";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import GroupEdit from "../GroupEdit";
import GroupDelete from "../GroupDelete";

interface IUser {
  id: number;
  username: string;
}

interface IVideo {
  id: number;
  title: string;
}

interface IGroup {
  id: number;
  title: string;
  users: number[];
  videos: number[];
}

const GroupList = () => {
  const [group, setGroup] = useState<IGroup[]>([]);
  const [getVideo, setGetVideo] = useState<IVideo[]>([]);
  const [getUser, setGetUser] = useState<IUser[]>([]);
  const { getToken } = useSession();
  const token = getToken();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const groupResponse = await axios.get("https://tabscreen-production.up.railway.app/api/admin/group/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setGroup(groupResponse.data);

        const videoResponse = await axios.get("https://tabscreen-production.up.railway.app/api/admin/video/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setGetVideo(videoResponse.data);

        const userResponse = await axios.get("https://tabscreen-production.up.railway.app/api/admin/user/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setGetUser(userResponse.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [token]);

  return (
    <tbody>
      {group.map((item: IGroup) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>
            {item.users.map((user, index) => (
              <div key={index}>
                {getUser.length >= 1 ? getUser.find((i) => i.id === user)?.username : ''},
              </div>
            ))}
          </td>
          <td>
            {item.videos.map((video, index) => (
              <div key={index}>
                {getVideo.length >= 1 ? getVideo.find((i) => i.id === video)?.title : ''},
              </div>
            ))}
          </td>
          <td>
            <GroupEdit initialTitle={item.title} initialUser={item.users} initialVideo={item.videos} id={item.id} />
          </td>
          <td>
            <GroupDelete id={item.id} name={item.title} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default GroupList;
