import { Addon } from "@/components/addon"
import { ClientLogos } from "@/components/Clients"
import { Counter } from "@/components/Counter"
import { Gallery } from "@/components/Gallery"
import { Hero } from "@/components/Hero"
import { ServiceCard } from "@/components/ServiceCard"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Perizinan Usaha - Pilar Group",
  description: "Solusi perizinan bisnis cepat dan terpercaya dari Pilar Group",
}

export default function KonsulPajak() {
  return (
    <main>
      <Hero backgroundImage="/hero.png" 
      subtitle="KONSULTASI PERPAJAKAN"
      title={["Optimalkan", "Keuangan Anda", "Bersama Kami"]} 
      description="Pilar menyediakan layanan profesional dan terpercaya untuk membantu Anda mengoptimalkan keuangan Anda. 
      Dengan tim ahli kami yang berpengalaman dan terampil dalam bidang akuntansi, perpajakan, dan keuangan, 
      kami siap memberikan solusi dan saran yang tepat agar Anda dapat mencapai tujuan keuangan Anda. 
      Kami membantu Anda menghindari risiko perpajakan dan memastikan kewajiban perpajakan Anda terpenuhi dengan tepat. 
      Hubungi kami sekarang untuk mendapatkan solusi keuangan yang optimal."/>

    <section className="max-w-5xl mx-auto my-8">
          <div className="container">
            <div className='mb-8 space-y-2 max-w-lg'>
            <h1 className='text-2xl'>Jasa Perpajakan Bulanan</h1>
              <h1 className='text-2xl font-bold'>Panduan Pajak Bulanan Anda Menuju Kesuksesan Keuangan</h1>
              <p className='text-md mb-4'>Menjadi Mitra Andal untuk Mengelola Kewajiban Perpajakan Bulanan: Mengoptimalkan Kepatuhan, Merancang Strategi Pajak yang Efisien, Memberikan Konsultasi Ahli, serta Menyederhanakan Pelaporan demi Sukses Keuangan yang Berkelanjutan.</p>
            </div>

            <h1 className='max-w-md mx-auto text-[#6B4536] text-2xl font-bold leading-tight mb-6 text-center'>“Pilihan Bijak: Harga Termurah, Bonus Melimpah!”</h1>            

            <div className="grid lg:grid-cols-3 gap-8">
              {/*Card */}
              <ServiceCard
                title="Pendirian PT Basic"
                requirements={{
                  title: "Layanan:",
                  items: [
                    "VALIDASI NAMA PERUSAHAAN.",
                    "PENGURUSAN AKTA PENDIRIAN.",
                    "PENGURUSAN SK KEMENKUMHAM.",
                  ],
                }}
                process={{
                  title: "Bonus",
                  items: [
                    "Free Konsultasi.",
                    "Pembuatan NPWP Pribadi.",
                  ],
                  price: [
                    "Rp 4.000.000",
                    "Rp 3.500.000",
                    "#TANPABIAYATAMBAHAN"
                  ]
                }}
              />
    
               {/*Card */}
               <ServiceCard
                title="Pendirian PT Basic"
                requirements={{
                  title: "Layanan:",
                  items: [
                    "VALIDASI NAMA PERUSAHAAN.",
                    "PENGURUSAN AKTA PENDIRIAN.",
                    "PENGURUSAN SK KEMENKUMHAM.",
                  ],
                }}
                process={{
                  title: "Bonus",
                  items: [
                    "Free Konsultasi.",
                    "Pembuatan NPWP Pribadi.",
                  ],
                  price: [
                    "Rp 4.000.000",
                    "Rp 3.500.000",
                    "#TANPABIAYATAMBAHAN"
                  ]
                }}
              />
    
              {/*Card */}
              {/*Card */}
              <ServiceCard
                title="Pendirian PT Basic"
                requirements={{
                  title: "Layanan:",
                  items: [
                    "VALIDASI NAMA PERUSAHAAN.",
                    "PENGURUSAN AKTA PENDIRIAN.",
                    "PENGURUSAN SK KEMENKUMHAM.",
                  ],
                }}
                process={{
                  title: "Bonus",
                  items: [
                    "Free Konsultasi.",
                    "Pembuatan NPWP Pribadi.",
                  ],
                  price: [
                    "Rp 4.000.000",
                    "Rp 3.500.000",
                    "#TANPABIAYATAMBAHAN"
                  ]
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

        <section>
        <Addon
          title="digital add ons"
          subtitle="Menjembatani Brand dan Costumer Anda"
          description="Kami percaya bahwa merekrut para ahli dalam industri ini adalah cara terbaik untuk memberikan hasil yang berkualitas. Oleh karena itu, kami ingin menawarkan pengalaman dan kreasi yang terbaik agar anda fokus membangun brand anda."
          />
       </section>
       
      <Gallery/>

      <ClientLogos/>
    </main>
  )
}


