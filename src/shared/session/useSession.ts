'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';

export interface IUserProfile {
  id: number;
  username: string;
  role: number;
  mac_address: string;
  online: boolean;
}

interface ISessionHook {
  user: IUserProfile | null;
  isAuthorized: boolean;
  getToken: () => string | null;
  setSession: (newToken: string) => void;
  clearSession: () => void;
}

const useSession = (): ISessionHook => {
  const [user, setUser] = useState<IUserProfile | null>(null);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  const getToken = (): string | null => {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      return localStorage.getItem('auth_token') || "";
    }
    return null;
  };

  const setSession = (newToken: string): void => {
    localStorage.setItem('auth_token', newToken);
  };

  const clearSession = (): void => {
    localStorage.removeItem('auth_token');
    setIsAuthorized(false)
    setUser(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getToken();
        if (token) {
          const response = await axios.get('https://cloudpaymentsapi.kz/api/admin/current_user/', {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
          if (response.status === 200) {
            setIsAuthorized(true);
            setUser(response.data);
          }
        }
      } catch (error) {
        console.error('Ошибка при запросе пользователя:', error);
      }
    };

    fetchData();
  }, []); 

  return {
    user,
    getToken,
    setSession,
    clearSession,
    isAuthorized
  };
};

export default useSession;
