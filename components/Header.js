import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center p-4 bg-gradient-to-b from-black to-transparent">
      <Link href="/">
        <div className="text-netflix-red font-bold text-3xl">NETFLIX</div>
      </Link>
      <div className="flex space-x-4">
        <button className="bg-netflix-red text-white px-4 py-2 rounded">
          Belépés
        </button>
      </div>
    </header>
  );
}
