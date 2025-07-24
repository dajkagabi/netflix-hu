import { 
  TvIcon,
  ArrowDownTrayIcon,
  DevicePhoneMobileIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

export default function PopularReasons() {
  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Jelenleg a legnépszerűbb</h1>
          <p className="text-2xl font-semibold text-netflix-red">Meg több ok, hogy csatlakozz</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-colors group">
            <div className="flex justify-center mb-4">
              <TvIcon className="h-12 w-12 text-netflix-red group-hover:text-red-400 transition-colors" />
            </div>
            <h2 className="text-xl font-bold mb-4 text-center">Nézd a tévéden</h2>
            <p className="text-gray-300 text-center">
              Nézd a műsorokat okostévén, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray lejátszón vagy sok más készüléken.
            </p>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-colors group">
            <div className="flex justify-center mb-4">
              <ArrowDownTrayIcon className="h-12 w-12 text-netflix-red group-hover:text-red-400 transition-colors" />
            </div>
            <h2 className="text-xl font-bold mb-4 text-center">Töltsd le a műsorokat</h2>
            <p className="text-gray-300 text-center">
              Mentsd el egyszerűen a kedvencedet, hogy mindig legyen mit nézned.
            </p>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-colors group">
            <div className="flex justify-center mb-4">
              <DevicePhoneMobileIcon className="h-12 w-12 text-netflix-red group-hover:text-red-400 transition-colors" />
            </div>
            <h2 className="text-xl font-bold mb-4 text-center">Nézd bárhol</h2>
            <p className="text-gray-300 text-center">
              Streamelj korlátlanul filmeket és sorozatokat telefonon, tableten, laptopon és tévén.
            </p>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-colors group">
            <div className="flex justify-center mb-4">
              <UserGroupIcon className="h-12 w-12 text-netflix-red group-hover:text-red-400 transition-colors" />
            </div>
            <h2 className="text-xl font-bold mb-4 text-center">Gyerekprofilok</h2>
            <p className="text-gray-300 text-center">
              Hadd éljék át a gyerekek a kedvenc karakterek kalandjait egy nekik készült felületen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}