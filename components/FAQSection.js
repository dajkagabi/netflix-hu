import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Mi a Netflix?",
      answer:
        "A Netflix egy streaming szolgáltatás, amely számos díjnyertes sorozatot, filmet, animét, dokumentumfilmet és még sok mást kínál internetre csatlakoztatott eszközökön. Annyit nézhetsz, amennyit csak akarsz, bármikor, reklámok nélkül – mindezt egyetlen alacsony havidíjért. Mindig találsz valami újat, és minden héten új sorozatok és filmek jelennek meg!",
    },
    {
      question: "Mennyibe kerül a Netflix?",
      answer:
        "Nézd a Netflixet okostelefonodon, tableteden, okostévéden, laptopodon vagy streamelő eszközödön, mindezt egyetlen fix havidíjért. A csomagok ára 2490 Ft és 4490 Ft között mozog havonta. Nincsenek extra költségek, nincsenek szerződések.",
    },
    {
      question: "Hol tudom nézni a műsorokat?",
      answer:
        "Nézd bárhol, bármikor. Jelentkezz be Netflix-fiókodba, és azonnal nézhetsz bármit internetre csatlakoztatott eszközről, amelyen fut a Netflix alkalmazás, ideértve az okostévéket, okostelefonokat, táblagépeket, streamelő lejátszókat és játékkonzolokat.  A kedvenc sorozataidat letöltheted iOS, Android vagy Windows 10 eszközödre, és megnézheted offline.",
    },
    {
      question: "Hogyan mondhatom le?",
      answer:
        "A Netflix rugalmas. Nincsenek bosszantó szerződések és kötelezettségek. Könnyedén lemondhatod fiókodat online, két kattintással. Nincs lemondási díj – bármikor elindíthatod vagy lemondhatod fiókodat.",
    },
    {
      question: "Mit nézhetek a Netflixen?",
      answer:
        "A Netflixen filmek, sorozatok, dokumentumfilmek, gyermekműsorok és sok más közül válogathatsz. Nézd meg, amit akarsz, amikor akarod, és annyit, amennyit akarsz.",
    },
    {
      question: "Gyerekeknek is jó a Netflix?",
      answer:
        "A Netflix Gyerek felületet úgy alakítottuk ki, hogy a gyerekek a szülők felügyelete nélkül is biztonságosan nézhessenek műsorokat.  Ez a felület fel van szerelve szülői felügyeleti eszközökkel, amelyek lehetővé teszik a szülők számára, hogy beállítsanak egy PIN-kódot a felnőtt tartalom eléréséhez, és korlátozzák az adott gyermekprofilon megtekinthető műfajokat.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
          Gyakran ismételt kérdések
        </h2>

        <div className="space-y-2 mb-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800">
              <button
                className="w-full text-left p-4 text-xl font-medium flex justify-between items-center hover:bg-gray-700 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span>{openIndex === index ? "x" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 pt-0 text-lg">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="mb-4 text-xl">
            Készen állsz a műsorainkra? Add meg az e-mail-címedet fiók
            létrehozásához vagy az előfizetés megújításához.
          </p>
          <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
            <input
              type="email"
              placeholder="E-mail-cím"
              className="px-4 py-3 w-full md:w-96 bg-black bg-opacity-70 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-bold text-xl flex items-center justify-center transition-colors duration-200">
              Első lépések <span className="ml-2 text-2xl">&gt;</span>
            </button>
          </div>
          <p className="text-sm mt-8">
            Kérdésed van? Hívd a{" "}
            <a href="tel:0680993056" className="underline hover:text-gray-300">
              06 80 993056
            </a>{" "}
            telefonszámot
          </p>
        </div>
      </div>
    </div>
  );
}
