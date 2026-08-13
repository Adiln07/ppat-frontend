"use client";

import LandingPageLayout from "@/components/layouts/LandingPageLayout/LandingPageLayout";
import {
  faEye,
  faFlagCheckered,
  faCircleCheck,
  faPenToSquare,
  faWallet,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const penasihat = [
  "H. ICHWAN ISMAIL, S.H.",
  "H. MUHAMMAD TAHIR, S.H.",
  "SRI RAHMAWATI S.H., M.Kn.",
  "LIA TRIZZA FIRGITHA ADHILIA, S.H., M.H.",
  "DR. ARIADIN S.H., M.H., M.Kn.",
  "HJ. ANDI INDRAWATI BAHARUDDIN, S.H., M.Kn.",
  "A. MINDARYANI YUNUS, S.T., S.H., M.Kn.",
  "FERRY ASSAAD, S.H., M.Kn.",
  "NERI ERNIATY, S.H., M.Kn.",
  "PAHALA L. RUMAHORBO, SH., M.Kn.",
];

const wakilKetua = [
  "DIERGA ANDRI WAHYUDI, S.H., M.Kn.",
  "NURHAEDAH HASAN, SH., M.Kn.",
  "JAMIDA AMIR, S.H., M.Kn.",
  "MUHAMMAD ARFAH, S.H., M.Kn.",
];

const wakilSekretaris = [
  "NURUL FADLIAH NURLAH S.H.,M.Kn.",
  "MARIE MUHAMMAD, S.H.,M.Kn.",
];

const wakilBendahara = [
  "ANDI IRMAWATI, S.H., M.Kn.",
  "YULIAWATI, S.H., M.Kn.",
  "LILY G. RANTE TANDUNG, S.H., M.Kn.",
  "SRI REZKY RADENG SAWEDY, S.H., M.Kn.",
];

const bidangList = [
  {
    nama: "BIDANG ADVOKASI DAN PELAYANAN HUKUM (LITIGASI DAN NON LITIGASI)",
    koor: "MUH ADLI IKRAM, S.H., M.Kn.",
    anggota: [
      "Hj. HUSNUL KHATIMAH ABRAR, S.H., M.Kn.",
      "ARIFUDDIN, S.H., M.Kn.",
    ],
  },
  {
    nama: "BIDANG HUBUNGAN KELEMBAGAAAN, PERIJINAN DAN KERJASAMA",
    koor: "SAMANG, S.H., M.Kn.",
    anggota: [
      "TRY SUTRISNO SYARIFUDDIN, S.H., M.Kn.",
      "RISMAYANTI, S.H., M.Kn.",
    ],
  },
  {
    nama: "BIDANG HUMAS, PENGELOLAAN DATA DAN INFORMATIKA",
    koor: "NABILA ZORAYA RAHMATULLAH, S.H., M.Kn.",
    anggota: [
      "HENY SUGIARTI, S.H., M.Kn.",
      "DIAN APRICIANY PUTRI, S.H., M.Kn.",
    ],
  },
  {
    nama: "BIDANG ORGANISASI",
    koor: "EDWARD, S.H., M.Kn.",
    anggota: ["IKA KURNIASIH, S.H., M.Kn.", "AHKAN BAHAR, S.H., M.Kn."],
  },
  {
    nama: "BIDANG MAGANG, PEMBINAAN ANGGOTA, DIKLATSAR DAN PEMBEKALAN KODE ETIK",
    koor: "SAFRI AWAL, S.H., M.Kn.",
    anggota: ["FIRMAN, S.H., M.Kn.", "NADIA ANANDA ELSANTI, S.H., M.Kn."],
  },
  {
    nama: "BIDANG SOSIALISASI DAN SEMINAR HUKUM",
    koor: "ANDI ASTRINI UMAR, S.H., M.Kn.",
    anggota: ["INDAH JUWITA, S.H., M.Kn.", "MIHIKO ACHMAD, S.H. ,M.Kn."],
  },
  {
    nama: "BIDANG PERATURAN PERUNDANG-UNDANGAN, RISET DAN PENGEMBANGAN HUKUM KE-PPAT-AN",
    koor: "ABDUL GAFUR, S.H., M.Kn.",
    anggota: ["NANDA AISYAH, S.H., M.Kn.", "KRISTIANA, S.H., M.Kn."],
  },
  {
    nama: "BIDANG DANA DAN USAHA",
    koor: "YUSMIATI YUSUF, S.H., M.Kn.",
    anggota: ["RISNA MANSYUR, S.H., M.Kn.", "HJ. DARNA WILO, S.H., M.Kn."],
  },
  {
    nama: "BIDANG SOSIALISASI DAN PENANGGULANGAN BENCANA",
    koor: "ARDI NUR SAFAR, S.H., M.Kn.",
    anggota: [
      "FARANNIZZA KURNIANTI, S.H., M.Kn.",
      "ANDI NOVITA PARAMITHA, S.H.,M.Kn.",
    ],
  },
  {
    nama: "BIDANG KEAGAMAAN DAN PENGABDIAN MASYARAKAT (MUSLIM)",
    koor: "CHAERANA, S.Ag., S.H., M.Kn.",
    anggota: [
      "AHMAD RAIS, S.H., M.Kn.",
      "ANDI AZHARIAH KARAENG TENE, S.H.,M.Kn.",
    ],
  },
  {
    nama: "BIDANG KEAGAMAAN DAN PENGABDIAN MASYARAKAT (NON MUSLIM)",
    koor: "WIDIYANA SAMUEL PARANNA, S.H., M.Kn.",
    anggota: ["DAVID RAFANSA UTAMA LEPONG, S.H., M.Kn."],
  },
  {
    nama: "BIDANG OLAHRAGA, KESENIAN DAN KEBUDAYAAN",
    koor: "MUHAMMAD ADLAN DAENG UPA, S.H., M.H., M.Kn.",
    anggota: ["SYAHRUL SANI, S.H., M.Kn.", "HERY DHARWIN, S.H., M.Kn"],
  },
];

const AboutUs = () => {
  return (
    <LandingPageLayout>
      <div className="">
        <section className="md:px-24 bg-[#E1E3E4]">
          <div className="py-20 flex flex-col gap-y-8">
            <p className="text-center text-[#8F000D] font-extrabold text-3xl">
              Mengenal IPPAT Parepare
            </p>
            <p className="text-justify [text-align-last:center] px-36 text-[#5A403E]">
              Ikatan Pejabat Pembuat Akta Tanah (IPPAT) Pengurus Daerah Parepare
              adalah wadah perhimpunan profesi PPAT yang berdedikasi untuk
              melayani masyarakat dalam bidang keperdataan khususnya pertanahan
              dengan integritas dan profesionalisme tinggi.
            </p>
          </div>
        </section>
        <section className="md:px-24 ">
          <div className="flex gap-x-8 py-20">
            <div className="bg-[#E1E3E4] rounded-sm py-6 pl-6 flex flex-col gap-y-8 flex-1">
              <FontAwesomeIcon
                icon={faEye}
                className="text-[#FFFFFF] p-3 bg-[#8F000D] rounded-sm"
              />
              <p className="text-[#8F000D] font-extrabold text-3xl">Visi</p>
              <p className="text-[#5A403E] pr-10 text-justify">
                Menjadi organisasi profesi PPAT yang bermartabat, profesional,
                dan terpercaya di wilayah Parepare, serta berkontribusi aktif
                dalam mewujudkan kepastian hukum hak atas tanah bagi seluruh
                lapisan masyarakat.
              </p>
            </div>
            <div className="bg-[#E1E3E4] rounded-sm py-6 pl-6 flex flex-col gap-y-8 flex-1">
              <FontAwesomeIcon
                icon={faFlagCheckered}
                className="text-[#FFFFFF] p-3 bg-[#8F000D] rounded-sm"
              />
              <p className="text-[#8F000D] font-extrabold text-3xl">Misi</p>
              <ul className="pr-10 flex flex-col gap-y-3 text-[#5A403E] text-justify">
                <li className="flex items-start gap-x-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[#8F000D] pt-1"
                  />
                  <p>
                    Meningkatkan kualitas dan integritas anggota melalui
                    pendidikan berkelanjutan.
                  </p>
                </li>
                <li className="flex items-start gap-x-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[#8F000D] pt-1"
                  />
                  <p>
                    Menjalin sinergi dan kemitraan yang kuat dengan Badan
                    Pertanahan Nasional dan instansi terkait.
                  </p>
                </li>
                <li className="flex items-start gap-x-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[#8F000D] pt-1"
                  />
                  <p>
                    Memberikan edukasi dan pelayanan hukum pertanahan yang
                    transparan kepada masyarakat.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="md:px-24 ">
          <div className="py-20">
            <div className="mb-13">
              <p className="text-[#8F000D] font-extrabold text-4xl">
                Sejarah Organisasi
              </p>
              <div className="bg-[#8F000D] h-2 mt-5 mb-4 w-25"></div>
            </div>

            <div className="flex gap-x-10">
              <div>
                <Image
                  src="/assets/aboutus1.jpeg"
                  alt=""
                  width={1000}
                  height={1000}
                  className="rounded-md"
                />
              </div>
              <div className="flex flex-col gap-y-3 items text-[#5A403E] text-justify">
                <span>
                  IPPAT Pengurus Daerah Parepare didirikan dengan semangat untuk
                  menyatukan visi dan misi para Pejabat Pembuat Akta Tanah yang
                  bertugas di wilayah strategis ini. Sebagai simpul jalur
                  perdagangan dan jasa, Parepare membutuhkan kepastian hukum
                  pertanahan yang solid.
                </span>
                <span>
                  Sejak awal pembentukannya, organisasi ini terus beradaptasi
                  dengan perkembangan regulasi agraria nasional. Kami
                  berkomitmen untuk menjaga standar etika profesi dan memastikan
                  setiap akta yang diterbitkan memiliki kekuatan pembuktian yang
                  sempurna demi melindungi hak-hak perdata masyarakat.
                </span>
                <span>
                  Melalui berbagai kepengurusan yang berganti, IPPAT Parepare
                  konsisten menyelenggarakan pembinaan anggota, diskusi panel
                  hukum, dan kegiatan sosial sebagai bentuk tanggung jawab
                  organisasi terhadap lingkungan sekitarnya.
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="md:px-24 bg-[#F5F5F5]">
          <div className="py-20">
            <div className="flex flex-col gap-y-5 mb-6">
              <p className="text-center text-[#8F000D] font-extrabold text-4xl">
                STRUKTUR ORGANISASI
              </p>
              <p className="text-center text-[##5A403E] text-md font-extralight">
                Susunan Pengurus Daerah IPPAT Parepare Periode 2024 - 2027
              </p>
            </div>

            {/* struktur */}
            <div className="max-h-[80vh] sm:max-h-[700px] overflow-y-auto rounded-xl bg-[#F5F5F5] p-4 sm:p-6 space-y-4 sm:space-y-5 border border-[#8F000D]">
              <div className="rounded-lg border border-[#E1E3E4] bg-white p-3 sm:p-4 shadow-sm">
                <p className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#8F000D] mb-3">
                  Penasihat
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                  {penasihat.map((nama, i) => (
                    <div key={i} className="text-center sm:text-left">
                      <p className="text-[11px] sm:text-xs font-medium text-slate-700 leading-snug">
                        {nama}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* KETUA - kartu utama, ditonjolkan */}
              <div className="rounded-xl border-2 border-[#8F000D] bg-white p-4 sm:p-6 text-center shadow-sm">
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">
                  Ketua
                </p>
                <p className="text-base sm:text-lg font-bold text-slate-800">
                  SURIANTO
                </p>
                <p className="text-xs sm:text-sm font-medium text-[#8F000D] mt-0.5">
                  S.H., M.Kn.
                </p>
              </div>

              {/* WAKIL KETUA I - IV — digabung jadi satu card */}
              <div className="rounded-lg border border-[#E1E3E4] bg-white p-3 sm:p-4 shadow-sm">
                <p className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#8F000D] mb-3">
                  Wakil Ketua
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  {wakilKetua.map((nama, i) => (
                    <div key={i} className="text-center sm:text-left">
                      <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                        Wakil Ketua {["I", "II", "III", "IV"][i]}
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">
                        {nama}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SEKRETARIS + WAKIL SEKRETARIS, BENDAHARA + WAKIL BENDAHARA */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {/* Card Sekretaris */}
                <div className="rounded-lg border border-[#E1E3E4] bg-white p-3 sm:p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-[#8F000D]/10 flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        className="text-[#8F000D] text-xs sm:text-sm"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] sm:text-xs text-slate-400">
                        Sekretaris
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 truncate">
                        JUMRIANI NURFADILLAH S.H.,M.H.,M.Kn.
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-3 grid grid-cols-2 gap-2.5">
                    {wakilSekretaris.map((nama, i) => (
                      <div key={i}>
                        <p className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wide leading-snug">
                          Wakil Sekretaris {["I", "II"][i]}
                        </p>
                        <p className="text-xs sm:text-sm font-medium text-slate-800 mt-0.5">
                          {nama}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bendahara */}
                <div className="rounded-lg border border-[#E1E3E4] bg-white p-3 sm:p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-[#8F000D]/10 flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faWallet}
                        className="text-[#8F000D] text-xs sm:text-sm"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] sm:text-xs text-slate-400">
                        Bendahara
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 truncate">
                        DEWI PUSPITA SARI, S.H., M.Kn.
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-3 grid grid-cols-2 gap-2.5">
                    {wakilBendahara.map((nama, i) => (
                      <div key={i}>
                        <p className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wide leading-snug">
                          Wakil Bendahara {["I", "II", "III", "IV"][i]}
                        </p>
                        <p className="text-xs sm:text-sm font-medium text-slate-800 mt-0.5">
                          {nama}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* BIDANG-BIDANG */}
              <div>
                <p className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#8F000D] mb-2">
                  Bidang-Bidang
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
                  {bidangList.map((bidang, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-[#E1E3E4] bg-white p-3 sm:p-4 shadow-sm"
                    >
                      <p className="text-xs sm:text-sm font-bold text-[#8F000D] mb-1">
                        {bidang.nama}
                      </p>
                      <div className="border-t border-slate-100 my-2" />
                      <p className="text-[11px] sm:text-xs text-slate-500">
                        Koordinator
                      </p>
                      <p className="text-xs sm:text-sm text-slate-800 mb-1.5 font-semibold">
                        {bidang.koor}
                      </p>

                      {bidang.anggota.map((anggota, idx) => (
                        <div key={idx} className="mt-1.5">
                          <p className="text-[11px] sm:text-xs text-slate-500">
                            Anggota {idx + 1}
                          </p>
                          <p className="text-xs sm:text-sm text-slate-800">
                            {anggota}
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="md:px-24">
          <div className="py-27 flex flex-col gap-y-8">
            <div>
              <p className="text-[#8F000D] font-extrabold text-4xl text-center">
                Wilayah Kerja
              </p>
            </div>
            <div className="bg-[#E1E3E4] rounded-md flex justify-center items-center h-100">
              <div className="bg-[#F8F9FA] p-5 flex flex-col items-center justify-center py-10 px-10 gap-y-5 rounded-md">
                <FontAwesomeIcon
                  icon={faMapLocationDot}
                  className="text-6xl text-[#8F000D]"
                />
                <p className="font-bold text-2xl text-[#191C1D]">
                  Kota Parepare
                </p>
                <p className="text-[#5A403E]">
                  Meliputi seluruh kecamatan dan kelurahan dalam wilayah hukum
                  administratif Kota Parepare.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LandingPageLayout>
  );
};

export default AboutUs;
