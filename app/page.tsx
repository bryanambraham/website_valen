import { InfoCard } from "@/components/Card"
import { Hero } from "@/components/Hero"
import type { Metadata } from "next"
import { Stats } from "@/components/stats"
import { Counter } from "@/components/Counter"
import { Button } from "@/components/ui/button"
import { Gallery } from "@/components/Gallery"
import { ClientLogos } from "@/components/Clients"

export const metadata: Metadata = {
  title: "Perizinan Usaha - Pilar Group",
  description: "Solusi perizinan bisnis cepat dan terpercaya dari Pilar Group",
}

export default function Home() {
  return (
    <main>
      <Hero 
      subtitle="HOME"
      backgroundImage="/hero.png" 
      title={["SOLUSI PERIZINAN BISNIS", "CEPAT DAN TERPERCAYA"]} />
    
    <div className="container py-12 space-y-12">
      <InfoCard
        title="Solusi Perizinan Bisnis Dari Tim Profesional"
        description="Tim kami terdiri dari para ahli dengan pengalaman dan keahlian dalam bidang perizinan dan pendirian usaha. Kami menyediakan layanan konsultasi yang terpercaya dan profesional untuk membantu Anda mengatasi segala tantangan terkait dengan perizinan dan pendirian usaha."
        imageUrl="hero-bg.svg"
        imageAlt="Tim profesional dalam meeting"
      />
      <InfoCard
        title="Fokus Pada Pengembangan Bisnis Anda, Biarkan Kami Mengurus Yang Lain"
        description="Kami menyediakan layanan yang mudah dan efisien untuk membantu Anda mempercepat proses perizinan dan pendirian usaha Anda. Dengan pengalaman kami yang luas, kami mampu memberikan solusi yang tepat dan efektif untuk memenuhi kebutuhan bisnis Anda, sehingga Anda dapat fokus pada pengembangan bisnis Anda secara keseluruhan."
        imageUrl="hero-bg.svg"
        imageAlt="Tim bekerja dengan dokumen"
        reverse
      />
    </div>
    
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

