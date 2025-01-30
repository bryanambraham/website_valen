import { ClientLogos } from '@/components/Clients'
import { Counter } from '@/components/Counter'
import { Gallery } from '@/components/Gallery'
import { Hero } from '@/components/Hero'
import { ServiceCard } from '@/components/ServiceCard'
import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <main>
      <Hero 
      subtitle="PT PERORANGAN"
      backgroundImage="/hero.png" 
      title={["Wujudkan Impian", "Bisnis Anda dengan", "PT Perorangan"]} 
      description='PT Perorangan memberikan kesempatan bagi individu untuk memulai bisnis dengan perlindungan hukum dan memperluas pasar bisnis secara mandiri. PT Perorangan juga memungkinkan Anda untuk memiliki kontrol penuh terhadap bisnis Anda.'/>
    
    <section className="max-w-5xl mx-auto mt-8">
          <div className="container">
            <div className='mb-8'>
              <p className='text-2xl mb-4'>Manfaat Perseroan Terbatas (PT) Perorangan
              bagi pendiri perusahaan meliputi :</p>
              <ul className='list-decimal pl-5 space-y-2'>
                <li>Kepemilikan PT lebih jelas dan sistemnya disusun berdasarkan kepemilikan saham</li>
                <li>Aktifitas bisnis yang lebih banyak karena beberapa bidang usaha diharuskan menggunakan badan usaha PT untuk beroperasi</li>
                <li>Bentuk usaha sudah badan hukum</li>
                <li>Badan usaha PT dipandang memiliki akses yang lebih terpercaya</li>
                <li>Dari segi perpajakan lebih menguntungkan</li>
              </ul>
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


    <section className="bg-[#2A1810] py-10 text-white mb-8 mt-8">
          {/* Welcome Text */}
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Counter end={9000} suffix="+" title="Projects Succeded" />
            <Counter end={97} suffix="%" title="Satisfied Clients" />
            <Counter end={90} suffix="%" title="Worth of Mouth Marketing" />
            <Counter end={93} suffix="%" title="Repeat Order" />
          </div>
          <div className='flex justify-center'>
          <Button
              variant="outline"
              className="bg-[#4A2E24] text-white border-white/20 hover:bg-[#5A3E34] hover:text-white uppercase tracking-wider mt-6"
            >
              contact us
          </Button>
          </div>

      </section>

      <Gallery/>

      <ClientLogos/>
    </main>
  )
}

export default page