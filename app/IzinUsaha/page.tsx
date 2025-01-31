import { Addon } from "@/components/addon"
import { ClientLogos } from "@/components/Clients"
import { Counter } from "@/components/Counter"
import { Gallery } from "@/components/Gallery"
import { Hero } from "@/components/Hero"
import { ServiceCard } from "@/components/ServiceCard"
import { Button } from "@/components/ui/button"
import { Cookie, Home } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Perizinan Usaha - Pilar Group",
  description: "Solusi perizinan bisnis cepat dan terpercaya dari Pilar Group",
}

export default function IzinUsaha() {
  return (
    <main>
      <Hero
        backgroundImage="/hero-bg.svg"
        subtitle="PERIZINAN KHUSUS"
        title={["Perizinan Bisnis:", "Langkah Awal", "Menuju", "Kesuksesan"]}
        description="Di Indonesia, perizinan bisnis diperlukan untuk memastikan bahwa sebuah usaha telah memenuhi standar dan regulasi yang ditetapkan oleh pemerintah. Proses perizinan bisnis dapat memakan waktu dan biaya yang cukup besar, namun pada akhirnya akan memberikan manfaat yang besar bagi bisnis tersebut. Dengan memiliki perizinan bisnis yang lengkap dan sah, sebuah bisnis dapat memperoleh kepercayaan dari pelanggan dan pihak-pihak terkait, meningkatkan akses ke sumber daya, serta melindungi bisnis dari sanksi dan tuntutan hukum yang merugikan. Oleh karena itu, perizinan bisnis merupakan langkah awal yang penting menuju kesuksesan dalam berbisnis di Indonesia."
      />
      <section className="py-16">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Title and Description Column */}
          <div>
            <h1 className="text-[#6B4536] text-4xl font-bold leading-tight mb-6">
              IZIN EDAR
              <br />
              UNTUK
              <br />
              MAKANAN DAN
              <br />
              MINUMAN
            </h1>
            <p className="text-muted-foreground">
              Izin untuk industri makanan dan minuman diberikan oleh BPOM setelah melakukan pemeriksaan dan pengujian
              terhadap produk yang dihasilkan. Izin ini memberikan jaminan dan kepercayaan kepada konsumen bahwa produk
              yang mereka beli telah melewati proses pengujian dan memenuhi standar kualitas yang ditetapkan oleh
              pemerintah. Sebagai hasilnya, izin ini dapat meningkatkan kepercayaan konsumen terhadap produk dan
              melindungi kesehatan masyarakat.
            </p>
          </div>

          {/*Card */}
          <ServiceCard
            title="PIRT"
            subtitle="(Pangan Industri Rumah Tangga)"
            requirements={{
              title: "Syarat Izin PIRT",
              description:
                "Untuk mendapatkan izin PIRT ini, para pelaku usaha di industri ini juga harus memenuhi beberapa kualifikasi dasar sebagai berikut :",
              items: [
                "Telah mengikuti, dan memiliki sertifikat penyuluhan keamanan pangan",
                "Lokasi uji pemeriksaan sarana uji produk pangan",
                "Memenuhi peraturan perundang-undangan label pangan",
              ],
            }}
            process={{
              title: "Proses Perizinan PIRT",
              items: [
                "Pengajuan permohonan perizinan PIRT",
                "Pemeriksaan dan evaluasi dokumen permohonan",
                "Inspeksi fisik lokasi produksi",
                "Uji coba sampel",
                "Penerbitan sertifikat PIRT",
                "Pengawasan pasca sertifikat PIRT",
              ],
            }}
          />

          {/*Card */}
          <ServiceCard
            title="BPOM"
            subtitle="(Badan Pengawas Obat Dan Makanan) PANGAN OLAHAN"
            requirements={{
              title: "Syarat BPOM Pangan Olahan",
              items: [
                "Administrasi Dasar",
                "Kontrak Dengan Pihak Ketiga Penanganan Hama / SOP Penanganan Hama Oleh Perusahaan",
                "SOP - Penerimaan Produk, Penyimpanan, Pendistribusian, Higini Karyawan, Sanitasi/Pembersihan Ruangan/Gudang, Penarikan Produk (Recall)",
                "Sertifikat Merek/Pendaftaran Merek",
                "Izin Usaha Industri (IUI) / Izin Usaha Mikro Kecil (IUMK)",
                "Hasil Audit Sarana Produksi (PSB) / Rekomendasi Balai POM setempat",
                "Izin Usaha Industri dari BKPM Pusat bagi produk minuman beralkohol",
                "IUI dan PSB penerima dan pemberi makloon serta surat kerjasama makloon",
              ],
            }}
            process={{
              title: "Proses Perizinan BPOM Pangan Olahan",
              items: [
                "Pendaftaran produk makanan",
                "Evaluasi administratif",
                "Evaluasi teknis",
                "Uji coba sampel",
                "Penerbitan izin edar",
                "Pengawasan pasca izin edar",
              ],
            }}
          />
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Title and Description Column */}
          <div>
            <h1 className="text-[#6B4536] text-4xl font-bold leading-tight mb-6">
              IZIN UNTUK
              <br />
              USAHA
              <br />
              KONSTRUKSI
            </h1>
            <p className="text-muted-foreground">
            Izin konstruksi diberikan setelah pemeriksaan dan pengujian proyek, memastikan standar keselamatan, kualitas, dan 
            lingkungan dipenuhi. Izin meningkatkan reputasi perusahaan, menjamin keselamatan di lokasi proyek, dan 
            melindungi lingkungan/masyarakat dari dampak negatif. Jangka panjangnya, izin ini membuka peluang bisnis baru dan 
            meningkatkan daya saing perusahaan di pasar.
            </p>
          </div>

          {/*Card */}
          <ServiceCard
            title="SKA"
            subtitle="(Sertifikasi Tenaga Ahli)"
            requirements={{
              title: "Syarat SKA Konstruksi:",
              items: [
                "Pendaftaran produk makanan",
                "Evaluasi administratif",
                "Evaluasi teknis",
                "Uji coba sampel",
                "Penerbitan izin edar",
                "Pengawasan pasca izin edar",
                "Memiliki pengalaman kerja minimal 3 tahun di bidang konstruksi",
                "Memiliki kemampuan teknis dan finansial yang memadai",
                "Memiliki perlengkapan dan peralatan konstruksi yang memadai",
              ],
            }}
            process={{
              title: "Berikut adalah proses pengurusan SKA",
              items: [
                "Persiapan dokumen",
                "Pendaftaran online",
                "Verifikasi administrasi",
                "Ujian teori",
                "Ujian praktek",
                "Verifikasi lapangan",
                "Pengumuman hasil",
                "Pembayaran Pajak",
                "Pelaporan"
              ],
            }}
          />

          {/*Card */}
          <ServiceCard
            title="SBUJK"
            subtitle="(Sertifikasi Badan Usaha Jasa Konstruksi)"
            requirements={{
              title: "Syarat SBUJK",
              items: [
                "Warga Negara Indonesia atau badan usaha yang terdaftar di Indonesia",
                "Memiliki keahlian teknis dan sumber daya manusia yang memadai",
                "Memiliki pengalaman minimal 3 tahun dalam pelaksanaan proyek konstruksi yang sejenis atau sekelas",
                "Memiliki kemampuan finansial yang memadai untuk melaksanakan proyek",
                "Terdaftar di Kementerian PUPR atau pihak berwenang terkait sebagai badan usaha jasa konstruksi",
                "Mempunyai sertifikat Sistem Manajemen Mutu ISO 9001 atau setara",
                "Memiliki peralatan dan perlengkapan yang memadai untuk pelaksanaan proyek konstruksi",
              ],
            }}
            process={{
              title: "Berikut adalah proses pengurusan SBUJK",
              items: [
                "Persiapan dokumen",
                "Pendaftaran online",
                "Verifikasi administrasi",
                "Ujian teoril",
                "Ujian praktek",
                "Verifikasi lapangan",
                "Pengumuman hasil",
                "Pembayaran Pajak",
                "Pelaporan",
              ],
            }}
          />
        </div>
      </div>
    </section>
    
    <section>
    <Addon
          title="digital add ons"
          subtitle="Menjembatani Brand dan Costumer Anda"
          description="Kami percaya bahwa merekrut para ahli dalam industri ini adalah cara terbaik untuk memberikan hasil yang berkualitas. Oleh karena itu, kami ingin menawarkan pengalaman dan kreasi yang terbaik agar anda fokus membangun brand anda."
          />

    </section>

    <section className="py-16">
      <div className="container">
      <h1 className="text-[#6B4536] text-4xl font-bold leading-tight mb-6">IZIN UNTUK ALAT KESEHATAN</h1>
      <p className="text-muted-foreground mb-8 max-w-prose">
      Izin untuk alat kesehatan adalah proses yang memungkinkan suatu 
      produk atau peralatan kesehatan diperbolehkan untuk digunakan atau 
      dipasarkan di pasar kesehatan tertentu. Izin ini diberikan setelah 
      melalui serangkaian pengujian, evaluasi dan persetujuan dari 
      otoritas kesehatan yang berwenang, untuk memastikan bahwa alat 
      kesehatan tersebut aman, efektif dan sesuai dengan peraturan yang berlaku.
      </p>
        <div className="grid lg:grid-cols-3 gap-8">
          {/*Card */}
          <ServiceCard
            title="SKA"
            subtitle="(Sertifikasi Tenaga Ahli)"
            requirements={{
              title: "Syarat SKA Konstruksi:",
              items: [
                "Pendaftaran produk makanan",
                "Evaluasi administratif",
                "Evaluasi teknis",
                "Uji coba sampel",
                "Penerbitan izin edar",
                "Pengawasan pasca izin edar",
                "Memiliki pengalaman kerja minimal 3 tahun di bidang konstruksi",
                "Memiliki kemampuan teknis dan finansial yang memadai",
                "Memiliki perlengkapan dan peralatan konstruksi yang memadai",
              ],
            }}
            process={{
              title: "Berikut adalah proses pengurusan SKA",
              items: [
                "Persiapan dokumen",
                "Pendaftaran online",
                "Verifikasi administrasi",
                "Ujian teori",
                "Ujian praktek",
                "Verifikasi lapangan",
                "Pengumuman hasil",
                "Pembayaran Pajak",
                "Pelaporan"
              ],
            }}
          />

          {/*Card */}
          <ServiceCard
            title="SKA"
            subtitle="(Sertifikasi Tenaga Ahli)"
            requirements={{
              title: "Syarat SKA Konstruksi:",
              items: [
                "Pendaftaran produk makanan",
                "Evaluasi administratif",
                "Evaluasi teknis",
                "Uji coba sampel",
                "Penerbitan izin edar",
                "Pengawasan pasca izin edar",
                "Memiliki pengalaman kerja minimal 3 tahun di bidang konstruksi",
                "Memiliki kemampuan teknis dan finansial yang memadai",
                "Memiliki perlengkapan dan peralatan konstruksi yang memadai",
              ],
            }}
            process={{
              title: "Berikut adalah proses pengurusan SKA",
              items: [
                "Persiapan dokumen",
                "Pendaftaran online",
                "Verifikasi administrasi",
                "Ujian teori",
                "Ujian praktek",
                "Verifikasi lapangan",
                "Pengumuman hasil",
                "Pembayaran Pajak",
                "Pelaporan"
              ],
            }}
          />

          {/*Card */}
          <ServiceCard
            title="SBUJK"
            subtitle="(Sertifikasi Badan Usaha Jasa Konstruksi)"
            requirements={{
              title: "Syarat SBUJK",
              items: [
                "Warga Negara Indonesia atau badan usaha yang terdaftar di Indonesia",
                "Memiliki keahlian teknis dan sumber daya manusia yang memadai",
                "Memiliki pengalaman minimal 3 tahun dalam pelaksanaan proyek konstruksi yang sejenis atau sekelas",
                "Memiliki kemampuan finansial yang memadai untuk melaksanakan proyek",
                "Terdaftar di Kementerian PUPR atau pihak berwenang terkait sebagai badan usaha jasa konstruksi",
                "Mempunyai sertifikat Sistem Manajemen Mutu ISO 9001 atau setara",
                "Memiliki peralatan dan perlengkapan yang memadai untuk pelaksanaan proyek konstruksi",
              ],
            }}
            process={{
              title: "Berikut adalah proses pengurusan SBUJK",
              items: [
                "Persiapan dokumen",
                "Pendaftaran online",
                "Verifikasi administrasi",
                "Ujian teoril",
                "Ujian praktek",
                "Verifikasi lapangan",
                "Pengumuman hasil",
                "Pembayaran Pajak",
                "Pelaporan",
              ],
            }}
          />
        </div>
      </div>
    </section>

      <section className="bg-[#2A1810] py-16 text-white mb-10">
        <div className="container">
          {/* Welcome Text */}
          <div className="max-w-4xl mx-auto text-center mb-12 space-y-6">
            <p className="text-lg md:text-xl leading-relaxed">
              Selamat datang di PILAR! Konsultan pendirian, perizinan usaha, dan perpajakan Anda. Tim ahli kami siap
              membantu Anda dalam menjalankan bisnis dengan mudah dan efisien. Bergabunglah dengan ribuan pelanggan kami
              dan nikmati solusi terbaik bagi kebutuhan bisnis Anda. Terima kasih telah memilih PILAR sebagai mitra
              bisnis Anda!
            </p>
            <Button
              variant="outline"
              className="bg-[#4A2E24] text-white border-white/20 hover:bg-[#5A3E34] hover:text-white uppercase tracking-wider"
            >
              Our Services
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <Counter end={9000} suffix="+" title="Projects Succeded" />
            <Counter end={97} suffix="%" title="Satisfied Clients" />
            <Counter end={90} suffix="%" title="Worth of Mouth Marketing" />
            <Counter end={93} suffix="%" title="Repeat Order" />
          </div>
        </div>
      </section>

      
      <Gallery/>

      <ClientLogos/>
    </main>
  )
}

