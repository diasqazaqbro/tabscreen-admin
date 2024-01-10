import useSession from "@/shared/session/useSession";
import Navbar from "./Navbar";

const Sidebar = () => {
  const { clearSession } = useSession();
  return (
    <div className="sidebar bg-secondary p-8 flex flex-col items-center h-screen ">
      <Navbar />
      <button
        onClick={() => {
          clearSession();
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }}
        className="rounded-md flex flex-row  w-full gap-2  py-2 px-3 mt-auto hover:bg-slate-300 hover:bg-opacity-70 transition ease-in-out duration-300 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M16.3135 8.0625L20.2499 12L16.3135 15.9375"
            stroke="#343434"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.75 12H20.2472"
            stroke="#343434"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.75 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H9.75"
            stroke="#343434"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Выйти
      </button>
    </div>
  );
};

export default Sidebar;
