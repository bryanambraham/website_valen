"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

// Import Swiper styles
import "swiper/css"

const clients = [
  {
    name: "Humanis Anggita Utama",
    logo: "/client.png",
  },
  {
    name: "Juliana Fashion",
    logo: "/client.png",
  },
  {
    name: "PT Wahyu Sejahtera Property",
    logo: "/client.png",
  },
  {
    name: "Prosper Farm",
    logo: "/client.png",
  },
  {
    name: "Mikro Utama",
    logo: "/client.png",
  },
  {
    name: "Mooska",
    logo: "/client.png",
  },
  {
    name: "Chicken Restaurant",
    logo: "/client.png",
  },
  {
    name: "Hikaru",
    logo: "/client.png",
  },
  {
    name: "Frois",
    logo: "/client.png",
  },
  {
    name: "Education Center",
    logo: "/client.png",
  },
  {
    name: "MES",
    logo: "/client.png",
  },
  {
    name: "Fine Diamond",
    logo: "/client.png",
  },
  {
    name: "SNP",
    logo: "/client.png",
  },
  {
    name: "Pearl Garden",
    logo: "/client.png",
  },
  {
    name: "NKP",
    logo: "/client.png",
  },
]

export function ClientLogos() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#6B4536]">OUR CLIENTS</h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
          className="client-logos-swiper"
        >
          {clients.map((client) => (
            <SwiperSlide key={client.name}>
              <div className="aspect-[3/2] relative">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  fill
                  className="object-contain filter transition-all duration-300"
                  //  grayscale hover:grayscale-0
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

