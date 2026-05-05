import Button from "../component/ui/Button";
import SpeakerCard from "../component/ui/SpeakerCard";
import Collapse from "../component/ui/Collapse";

export default function Workshop() {
  const speaker =  [
    {
      name: "M. Dendi Purwanto",
      role: "Artificial Intelligence, Software Engineer, PT. Mayar Kernel Supernova",
      imageUrl:
      "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20AI.png",
    },
    {
      name: "Danang Avan",
      role: "Cyber Security, Security Analyst, Founder | Contributor TegalSec",
      imageUrl:
      "https://www.invofest-harkatnegeri.com/assets/workshop/talkshow%20cyber.png",
    },
    {
      name: "Lhuqita Fazry",
      role: "Mobile Development Developer, Founder Rumah Coding Indonesia",
      imageUrl:
      "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
    },
  ];
  const collapseItem = [
    {
      title: "Apa itu Invofest?",
      description:
      "Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ",
    },
    {
      title: "Siapa saja yang dapat mengikuti Invofest?",
      description: "Invofest terbuka untuk semua mahasiswa di Indonesia yang memiliki minat dalam bidang informatika, teknologi, dan inovasi. Kami mengundang mahasiswa dari berbagai jurusan untuk bergabung dan berpartisipasi dalam festival ini.",
    },
    {
      title: "Apa saja kegiatan yang akan diadakan selama Invofest?",
      description: "Invofest akan menyelenggarakan berbagai kegiatan menarik, termasuk kompetisi, seminar, workshop, dan talkshow yang akan membahas berbagai topik terkait teknologi dan inovasi. Peserta dapat memilih untuk mengikuti kegiatan yang sesuai dengan minat dan keahlian mereka.",
    },
  ];
  
  return (
    <div>
        <section id="hero" className="flex justify-between items-center gap-5">
            <div className="w-2/3 flex flex-col gap-6">
  
                <h1 className="text-red-900 font-bold text-4xl md:text-5xl">IT Workshop</h1>
  
                    <p className="text-3xl font-semibold text-red-900">"AI for a Sustainable Future: The Role of Z Generation in the Digital Era"</p>
                    <p className="text-gray-600 text-2xl font-regular">IT Workshop ini menjembatani antara potensi Generasi Z dan kekuatan AI untuk menciptakan masa depan yang berkelanjutan. Peserta akan dibekali wawasan dan alat untuk mentransformasi ide-ide inovatif menjadi solusi lingkungan yang nyata dan terukur di era digital.</p>
  
                    <div className="flex gap-3 mt-3">
                        <Button label="Info selengkapnya" variant="primary"/>
                        <Button label="Hubungi panitia" variant="outline"/>
                    </div>
  
                  </div>
  
                  <div className="w-1/3">
                      <img
                      src="https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png"
                      alt="Workshop"
                      />
                  </div>
              </section>
  
               <section id="speaker" className="py-15">
                  <h1 className="text-4xl font-bold text-red-900 mb-15 text-center">Temui Pembicara Khusus Kami</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-3">
                      {speaker.map((speaker, index) => (
                        <SpeakerCard
                        key={index}
                        name={speaker.name}
                        role={speaker.role}
                        imageUrl={speaker.imageUrl}
                      />
                      ))}
                    </div>
                  </section>
                  <section id="collapse" className="py-24 flex flex-col gap-2 px-3">
                        {collapseItem.map((item, index) => (
                          <Collapse key={index} tittle={item.title} description={item.description} 
                          />
                        ))}
                      </section>
          </div>
  );
};