import Button from "../component/ui/Button";
import Collapse from "../component/ui/Collapse";
import Card from "../component/ui/Card";


export default function Competition(){
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
  const items = [
    {
        img: "https://www.invofest-harkatnegeri.com/assets/competition-card/software_dev.png",
        title: "Poster Design Competition",
        description: "Poster Design Competition ini adalah kompetisi untuk menciptakan suatu karya dalam bentuk poster digital yang komunikatif dan inspiratif, guna menyuarakan gagasan atau solusi visual terhadap permasalahan yang ada sekarang ini."
    }, 
    {
        img: "https://www.invofest-harkatnegeri.com/assets/competition-card/ui_ux.png",
        title: "UI/UX Design Competition",
      description: "UI/UX Design Competition ini adalah kompetisi untuk menciptakan dan merancang inovasi sebuah produk digital yang dapat berupa website maupun mobile apps serta dapat membuat nyaman calon penggunaa."
    },
    {
        img: "https://www.invofest-harkatnegeri.com/assets/competition-card/web_design.png",
        title: "Web Design Competition",
        description: "Web Design Competition ini adalah kompetisi untuk menciptakan suatu perangkat lunak berbasis website yang menggunakan desain menarik, unik, dan responsive pada semua device serta sesuai dengan tema kompetisi."
    },
  ]
  
    
    return (
        <div>
            <section
            id="hero"
            className="flex justify-between gap-10 items-center"
            >
                <div className="w-2/3 flex flex-col gap-6">

                    <h1 className="text-red-900 font-bold text-4xl md:text-5xl">
                    IT Competition
                    </h1>

                    <p className="text-3xl font-semibold text-red-900">
                    "From Creation to Innovation"
                    </p>

                    <p className="text-gray-600 text-2xl font-regular">
                       Kompetisi dalam INVOFEST ini mengusung tema “From Creation to Innovation”, Tema ini bertujuan mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.
                    </p>

                    <div className="flex gap-3 mt-3">
                        <Button label="Daftar Sekarang" variant="primary"/>
                        <Button label="Hubungi panitia" variant="outline"/>
                    </div>

                </div>

                <div className="w-1/3">
                    <img
                    src="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png"
                    alt="Competition"
                    />
                </div>
            </section>

            <section id="card" className="py-15">
                <h1 className="text-4xl font-bold text-red-900 mb-3 text-center">Daftar Kompetisi</h1>
                <p className="text-gray-600 text-lg text-center">
                    Berikut adalah daftar kompetisi yang ada pada INVOFEST:
                </p>
                <div className="py-5 grid grid-cols-1 md:grid-cols-3 gap-10 px-3">
                    {items.map((item, index) => (
                        <Card key={index} className="w-full overflow-hidden p-0 rounded-xl shadow-md hover:shadow-lg transition">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full object-cover"
                            />

                            <div className="p-5 flex flex-col justify-between h-full">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm">
                                        {item.description}
                                    </p>
                                    <Button
                                    label="Info selengkapnya"
                                    variant="primary"
                                    className="mt-4"/>
                                </div>
                            </div>
                        </Card>
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