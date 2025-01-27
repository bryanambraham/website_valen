import { Hero } from '@/components/Hero'
import React from 'react'

const page = () => {
  return (
    <main>
        <Hero 
        subtitle='Tentang Kami'
        backgroundImage='hero.png'
        title={["SPESIALIS PERIZINAN DAN","PENDIRIAN USAHA"]}
        description='TENTANG PILAR
        Pilar adalah Konsultan Bisnis Terpercaya untuk mempercepat proses perizinan dan pendirian usaha setiap Pengusaha.

        CV. PILAR ADHI KARYA (PilarGroup.net) terdaftar di Kementerian Hukum dan HAM RI, dengan SK Nomor AHU-0036209-AH.01.14 Tahun 2021
        VISI
        Konsultan terbaik di Indonesia untuk bisnis, perizinan, pajak, dan HAKI, dengan solusi inovatif untuk kesuksesan klien.
        MISI
        Memberikan layanan konsultasi yang cepat dan efisien untuk memudahkan klien memulai bisnis
        Menyediakan perizinan dan dokumen hukum yang akurat dan tepat waktu
        Memberikan konsultasi perpajakan yang inovatif untuk membantu klien memenuhi kewajiban mereka
        Menyediakan layanan HAKI yang profesional untuk melindungi hak kekayaan intelektual klien
        Memberikan solusi bisnis terukur yang membantu klien mencapai tujuan mereka'
    />
    </main>
  )
}

export default page