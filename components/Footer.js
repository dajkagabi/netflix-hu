export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <p className="mb-6">Kérdésed van? Hívd a(z) 06.80.993056 telefonszámot</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-2">
            <p className="text-gray-300">GYIK</p>
            <p>Befektetői kapcsolatok</p>
            <p>Megtekintési lehetőségek</p>
            <p>Vállalati információk</p>
            <p>Jogi nyilatkozatok</p>
          </div>
          
          <div className="space-y-2">
            <p className="text-gray-300">Ügyfélszolgálat</p>
            <p>Karrier</p>
            <p>Felhasználási feltételek</p>
            <p>Lépj velünk kapcsolatba</p>
            <p>Csak a Netflixen</p>
          </div>
          
          <div className="space-y-2">
            <p className="text-gray-300">Fiók</p>
            <p>Ajándékkártyák beváltása</p>
            <p>Adatvédelmi beállítások</p>
            <p>Sebességteszt</p>
            <p>Jogi nyilatkozatok</p>
          </div>
          
          <div className="space-y-2">
            <p className="text-gray-300">Egyéb</p>
            <p>Ajándékkártya vásárlása</p>
            <p>Cookie beállítások</p>
            <p>Jogi garancia</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-4">
          <p className="text-sm">Netflix Magyarország</p>
          <p className="text-xs mt-2">
            Az oldal Google reCAPTCHA funkció használatával győződik meg róla, hogy nem vagy robot. További információk.
          </p>
        </div>
      </div>
    </footer>
  )
}