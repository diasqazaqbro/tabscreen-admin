'use client'
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const router = usePathname()
    
  const isLinkActive = (href: string) => {
    return router === href;
  };

  return (
    <div className="mt-4 flex flex-col gap-2">
      <Link href="/groups" passHref>
        <div className={`rounded-md flex flex-row gap-2 py-2 px-3 ${
          isLinkActive('/groups') ? 'bg-primary text-white' : 'hover:bg-slate-300 hover:bg-opacity-70'
        }`}>
          Группы
        </div>
      </Link>
      <Link href="/users" passHref>
        <div className={`rounded-md flex flex-row gap-2 py-2 px-3 ${
          isLinkActive('/users') ? 'bg-primary text-white' : 'hover:bg-slate-300 hover:bg-opacity-70'
        }`}>
          Пользователи
        </div>
      </Link>
      <Link href="/widgets" passHref>
        <div className={`rounded-md flex flex-row gap-2 py-2 px-3 ${
          isLinkActive('/widgets') ? 'bg-primary text-white' : 'hover:bg-slate-300 hover:bg-opacity-70'
        }`}>
          Виджеты
        </div>
      </Link>
      <Link href="/videos" passHref>
        <div className={`rounded-md flex flex-row gap-2 py-2 px-3 ${
          isLinkActive('/videos') ? 'bg-primary text-white' : 'hover:bg-slate-300 hover:bg-opacity-70'
        }`}>
          Видео
        </div>
      </Link>
      <Link href="/admins" passHref>
        <div className={`rounded-md flex flex-row gap-2 py-2 px-3 ${
          isLinkActive('/admins') ? 'bg-primary text-white' : 'hover:bg-slate-300 hover:bg-opacity-70'
        }`}>
          Админы
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
