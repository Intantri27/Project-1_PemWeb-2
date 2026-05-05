import Button from "../component/ui/Button";
import SpeakerCard from "../component/ui/SpeakerCard";
import Collapse from "../component/ui/Collapse";

export default function Talkshow() {
  const speaker =  [
    {
      name: "Moc Ihsan Maulana",
      role: "Human Capital Information System, PT. Garuda Daya Pratama Sejahtera",
      imageUrl:
      "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20ichsan.png",
    },
    {
      name: "M. Zaim Zamzami",
      role: "Programmer, PT. Pertamina Drilling Service Indonesia",
      imageUrl:
      "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20zaim%20zamzami.png",
    },
    {
      name: "Daffa Zuhdan Muhtar",
      role: "Android Developer, PT. Astra Internasional",
      imageUrl:
      "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20daffa.png",
    },
    {
      name: "Bayu Adi Prasetyo",
      role: "Software Engineer, KOMPAS.ID",
      imageUrl:
      "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20bayu.png",
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
  
                <h1 className="text-red-900 font-bold text-4xl md:text-5xl">IT Talkshow</h1>
  
                    <p className="text-3xl font-semibold text-red-900">"Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan"</p>
                    <p className="text-gray-600 text-2xl font-regular">Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan” Sebuah diskusi interaktif yang mengeksplorasi cara mengintegrasikan nilai-nilai kemanusiaan seperti etika, empati, dan kreativitas ke dalam pengembangan kecerdasan buatan. yang bertujuan menginspirasi audiens untuk membangun dan memanfaatkan AI sebagai alat kolaboratif yang memperkuat potensi unik manusia, bukan sebagai penggantinya.</p>
  
                    <div className="flex gap-3 mt-3">
                        <Button label="Info selengkapnya" variant="primary"/>
                        <Button label="Hubungi panitia" variant="outline"/>
                    </div>
  
                  </div>
  
                  <div className="w-1/3">
                      <img
                      src="https://www.invofest-harkatnegeri.com/assets/Maskot-Talkshow.png"
                      alt="Talkshow"
                      />
                  </div>
              </section>
  
               <section id="speaker" className="py-15">
                  <h1 className="text-4xl font-bold text-red-900 mb-15 text-center">Temui Pembicara Khusus Kami</h1>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-3">
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