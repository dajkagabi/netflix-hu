import Link from "next/link";
import Image from "next/image";
import netflix from "../public/images/netflix.svg";

export default function Header() {
  return (
    <header className="absolute top-0 w-full z-50 flex justify-between items-center p-4">
      <Link href="/">
        <Image
          src={netflix}
          alt="Netflix Logo"
          width={90}
          height={30}
          priority
          className="cursor-pointer"
        />
      </Link>
      <div className="flex space-x-4 items-center">
        <div className="relative">
          <select className="bg-black bg-opacity-50 border border-gray-500 text-white text-sm py-1 px-3 rounded pr-8 appearance-none focus:outline-none focus:ring-1 focus:ring-white">
            <option value="hu">Magyar</option>
            <option value="en">English</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        <Link href="/login">
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-medium transition-colors duration-200">
            Bejelentkezés
          </button>
        </Link>
      </div>
    </header>
  );
}
