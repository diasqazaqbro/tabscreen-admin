"use client";
import useSession from "@/shared/session/useSession";
import axios from "axios";
import React, { use, useEffect, useState } from "react";

interface GroupEditProps {
  id: number;
  initialUser: number[];
  initialVideo: number[];
  initialTitle: string;
}

interface Item {
  id: number;
  username: string;
}
interface Video {
  id: number;
  title: string;
}

const GroupEdit: React.FC<GroupEditProps> = ({ id, initialUser, initialVideo,initialTitle }) => {
  const [title, setTitle] = useState("");

  const [getUser, setGetUser] = useState<Item[]>([]);
  const [getVideo, setGetVideo] = useState<Video[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const { getToken } = useSession();
  const token = getToken();
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    axios
      .get(`https://cloudpaymentsapi.kz/api/admin/user/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setGetUser(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    axios
      .get(`https://cloudpaymentsapi.kz/api/admin/video/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setGetVideo(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setTitle(initialTitle)
  }, [token, initialTitle]);

  const [selectedUser, setSelectedUser] = useState<number[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<number[]>([]);

  useEffect(() => {
    setSelectedUser(initialUser);
    setSelectedVideo(initialVideo);
  }, [initialUser, initialVideo]);

  const handleCheckboxUser = (id: number) => {
    const isSelected = selectedUser.includes(id);

    setSelectedUser(
      isSelected
        ? selectedUser.filter((selectedId) => selectedId !== id)
        : [...selectedUser, id]
    );
  };
  const handleCheckboxVideo = (id: number) => {
    const isSelected = selectedUser.includes(id);

    setSelectedVideo(
      isSelected
        ? selectedVideo.filter((selectedId) => selectedId !== id)
        : [...selectedVideo, id]
    );
  };

  const handleCreateGroup = () => {
    axios
      .put(
        `https://cloudpaymentsapi.kz/api/admin/group/${id}/`,
        {
          title: title,
          users: selectedUser,
          videos: selectedVideo,
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
            <h2 className="text-2xl font-bold mb-4">Редактировать группу</h2>
            <input
              type="text"
              className="w-full border p-2 mb-4"
              placeholder="Введите название группы"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <details className="my-3">
              <summary>
                <h4 className="d-inline">Пользователи</h4>
              </summary>
              <div className="accordion-body">
                {getUser &&
                  getUser.map((item) => (
                    <div key={item.id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`checkbox-${item.id}`}
                        checked={selectedUser.includes(item.id)}
                        onChange={() => handleCheckboxUser(item.id)}
                        className="form-checkbox h-5 w-5 text-blue-500"
                      />
                      <label
                        htmlFor={`checkbox-${item.id}`}
                        className="ml-2 text-gray-700"
                      >
                        {item.username}
                      </label>
                    </div>
                  ))}
              </div>
            </details>
            <details className="my-3">
              <summary>
                <h4 className="d-inline">Видео</h4>
              </summary>
              <div className="accordion-body">
              {getVideo &&
                  getVideo.map((item) => (
                    <div key={item.id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`checkbox-${item.id}`}
                        checked={selectedVideo.includes(item.id)}
                        onChange={() => handleCheckboxVideo(item.id)}
                        className="form-checkbox h-5 w-5 text-blue-500"
                      />
                      <label
                        htmlFor={`checkbox-${item.id}`}
                        className="ml-2 text-gray-700"
                      >
                        {item.title}
                      </label>
                    </div>
                  ))}
              </div>
            </details>
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

export default GroupEdit;
