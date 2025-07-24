import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import hero from "../public/images/hero.jpg";
import Image from "next/image";
import netflix from "../public/images/netflix.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Kérjük, töltsd ki mindkét mezőt!");
      return;
    }
    router.push("/browse");
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      <Head>
        <title>Netflix - Bejelentkezés</title>
      </Head>

      <div>
        <Image
          src={hero}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 object-cover opacity-50"
          priority
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="px-6 py-6">
          <Link href="/" className="text-[#E50914] font-extrabold text-3xl">
            <Image
              src={netflix}
              alt="Netflix Logo"
              width={90}
              height={30}
              priority
              className="cursor-pointer"
            />
          </Link>
        </div>

        <div className="flex-grow flex items-center justify-center px-4 pb-16">
          <div className="w-full max-w-md bg-black bg-opacity-75 px-12 py-10 rounded">
            <h1 className="text-3xl font-bold mb-8">Bejelentkezés</h1>

            {error && (
              <div className="mb-4 p-3 bg-red-900 text-white rounded text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="E-mail vagy mobiltelefonszám"
                  className="w-full p-3 bg-gray-700 rounded text-white placeholder-gray-400 focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Jelszó"
                  className="w-full p-3 bg-gray-700 rounded text-white placeholder-gray-400 focus:outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#E50914] hover:bg-[#f6121d] text-white py-3 rounded font-bold transition-colors"
              >
                Bejelentkezés
              </button>

              <button
                type="button"
                className="w-full border border-gray-600 text-white py-3 rounded hover:bg-gray-700 transition"
              >
                Bejelentkezési kód használata
              </button>

              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 rounded border-gray-300 text-[#E50914] focus:ring-[#E50914]"
                  />
                  <label htmlFor="remember" className="text-gray-300">
                    Emlékezzen rám
                  </label>
                </div>

                <Link href="#" className="text-gray-400 hover:underline">
                  Elfelejtetted a jelszavad?
                </Link>
              </div>
            </form>

            <div className="mt-10 text-gray-400 text-sm">
              <p className="mb-4">
                Új vagy a Netflixen?{" "}
                <Link href="/register" className="text-white hover:underline">
                  Regisztrálj most.
                </Link>
              </p>

              <p className="text-xs">
                Az oldal Google reCAPTCHA funkció használatával győződik meg
                róla, hogy nem vagy robot.{" "}
                <Link href="#" className="text-blue-500 hover:underline">
                  További információk.
                </Link>
              </p>
            </div>
          </div>
        </div>

        <footer className="bg-black bg-opacity-75 py-6 px-4 border-t border-gray-800">
          <div className="max-w-6xl mx-auto text-gray-400 text-sm">
            <p className="mb-4">
              Kérdésed van? Hívd a(z) 06 80 993 056 telefonszámot
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              <div>
                <p className="text-gray-300 mb-2">GYIK</p>
                <p>Befektetői kapcsolatok</p>
                <p>Megtekintési lehetőségek</p>
                <p>Vállalati információk</p>
                <p>Jogi nyilatkozatok</p>
              </div>
              <div>
                <p className="text-gray-300 mb-2">Ügyfélszolgálat</p>
                <p>Karrier</p>
                <p>Felhasználási feltételek</p>
                <p>Lépj velünk kapcsolatba</p>
                <p>Csak a Netflixen</p>
              </div>
              <div>
                <p className="text-gray-300 mb-2">Fiók</p>
                <p>Ajándékkártyák beváltása</p>
                <p>Adatvédelmi beállítások</p>
                <p>Sebességteszt</p>
                <p>Jogi nyilatkozatok</p>
              </div>
              <div>
                <p className="text-gray-300 mb-2">Egyéb</p>
                <p>Ajándékkártya vásárlása</p>
                <p>Cookie beállítások</p>
                <p>Jogi garancia</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
