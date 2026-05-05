import Button from "../component/ui/Button";
import Collapse from "../component/ui/Collapse";
import SpeakerCard from "../component/ui/SpeakerCard";


export default function Seminar(){

    const speaker = [
    {
      name: "Dery Agung Triyadi",
      role: "Aws Indonesia",
      imageUrl:
      "https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png",
    },
    {
      name: "Sowam Habibi",
      role: "Google Indonesia",
      imageUrl:
      "https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png",
    },
    ]
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
            <section
            id="hero"
            className="flex justify-between items-center"
            >
                <div className="w-2/3 flex flex-col gap-6">

                    <h1 className="text-red-900 font-bold text-4xl md:text-5xl">
                    IT Seminar
                    </h1>

                    <p className="text-3xl font-semibold text-red-900">
                    "Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif"
                    </p>

                    <p className="text-gray-600 text-2xl font-regular">
                        Seminar nasional yang membahas strategi dan arsitektur teknologi untuk menciptakan sistem di mana manusia dan AI bekerja sebagai mitra yang sinergis.Yang bertujuan mengubah paradigma dari persaingan menjadi kolaborasi, serta meningkatkan pengetahuan peserta dalam merancang teknologi AI yang berpusat pada manusia.
                    </p>

                    <div className="flex gap-3 mt-3">
                        <Button label="Info selengkapnya" variant="primary"/>
                        <Button label="Hubungi panitia" variant="outline"/>
                    </div>

                </div>

                <div className="w-1/3">
                    <img
                    src="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png"
                    alt="Seminar"
                    />
                </div>
            </section>

             <section id="speaker" className="py-15">
                <h1 className="text-4xl font-bold text-red-900 mb-15 text-center">Temui Pembicara Kami</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-3">
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