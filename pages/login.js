import Head from 'next/head'
import Link from 'next/link'

export default function Login() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Netflix - Bejelentkezés</title>
      </Head>
      
      <div className="px-4 py-6 border-b border-gray-800">
        <Link href="/">
          <div className="text-netflix-red font-bold text-3xl cursor-pointer">NETFLIX</div>
        </Link>
      </div>
      
      <div className="flex justify-center py-16">
        <div className="w-full max-w-md bg-black bg-opacity-70 px-12 py-10 rounded">
          <h1 className="text-3xl font-bold mb-6">Bejelentkezés</h1>
          
          <form className="space-y-4">
            <div>
              <input 
                type="text" 
                placeholder="E-mail vagy mobiltelefonszám" 
                className="w-full p-3 bg-gray-700 rounded"
              />
            </div>
            <div>
              <input 
                type="password" 
                placeholder="Jelszó" 
                className="w-full p-3 bg-gray-700 rounded"
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-netflix-red text-white py-3 rounded font-bold"
            >
              Belépés
            </button>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember">Emlékezz rám</label>
              </div>
              
              <Link href="#" className="text-gray-400 hover:underline">
                Segítség
              </Link>
            </div>
            
            <div className="pt-4">
              <p className="text-gray-400">
                Új vagy a Netflixen?{' '}
                <Link href="#" className="text-white hover:underline">
                  Regisztrálj most.
                </Link>
              </p>
            </div>
          </form>
          
          <div className="mt-8 text-xs text-gray-400">
            <p>
              Az oldal Google reCAPTCHA funkció használatával győződik meg róla, hogy nem vagy robot.{' '}
              <Link href="#" className="text-blue-500 hover:underline">
                További információk.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}