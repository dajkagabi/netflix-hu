export default function PopularSection() {
  return (
    <div className="bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Meg több ok, hogy csatlakozz</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-4">📺</div>
            <h3 className="text-xl font-bold mb-2">Nézd a tévéden</h3>
            <p>Nézd a műsorokat okostévén, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray lejátszón vagy sok más készüléken.</p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl mb-4">📥</div>
            <h3 className="text-xl font-bold mb-2">Töltsd le a műsorokat</h3>
            <p>Mentsd el egyszerűen a kedvencedet, hogy mindig legyen mit nézned.</p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-xl font-bold mb-2">Nézd bárhol</h3>
            <p>Streamelj korlátlanul filmeket és sorozatokat telefonon, tableten, laptopon és tévén.</p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl mb-4">👶</div>
            <h3 className="text-xl font-bold mb-2">Gyerekprofilok</h3>
            <p>Hadd éljék át a gyerekek a kedvenc karakterek kalandjait egy nekik készült felületen.</p>
          </div>
        </div>
      </div>
    </div>
  );
}