import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="relative h-screen">
      <Image
        src="/images/hero.jpg"
        alt="Netflix háttér"
        fill
        className="object-cover opacity-60"
      />
      
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Filmek, sorozatok és egyéb műsorok korlátlan kínálata
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Akár 2 890 Ft havi díjért. Bármikor lemondhatod.
          </p>
          
          <div className="flex flex-col md:flex-row gap-2 justify-center">
            <input 
              type="email" 
              placeholder="E-mail-cím" 
              className="px-4 py-3 md:w-96 bg-black bg-opacity-70 border border-gray-600 rounded text-white"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-medium transition-colors duration-200">
              Első lépések &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}