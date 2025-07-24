

export default function FAQSection() {
  const faqs = [
    {
      question: "Mi a Netflix?",
      answer: "A Netflix egy streaming szolgáltatás..."
    },
    {
      question: "Mennyibe kerül a Netflix?",
      answer: "Nézd a Netflixet okostelefonodon, tableteden..."
    },
    // További kérdések...
  ]

  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Gyakran ismételt kérdések</h2>
        
        <div className="space-y-2 mb-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-700 rounded">
              <button className="w-full text-left p-4 text-xl font-medium bg-gray-900 hover:bg-gray-800">
                {faq.question}
              </button>
              <div className="p-4 bg-gray-900 hidden">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="mb-4">Készen állsz a műsorainkra? Add meg az e-mail-címedet fiók létrehozásához vagy az előfizetés megújításához.</p>
          <div className="flex flex-col md:flex-row gap-2 justify-center">
            <input 
              type="email" 
              placeholder="E-mail-cím" 
              className="px-4 py-3 md:w-96 bg-black bg-opacity-70 border border-gray-600 rounded text-white"
            />
            <button className="bg-netflix-red text-white px-6 py-3 rounded font-bold text-xl">
              Első lépések &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}