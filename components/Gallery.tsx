"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// Sample gallery data - replace with your actual images
const galleryImages = [
  // Slide 1
  ["/galleryclient.png", "/galleryclient.png", "/galleryclient.png"],
  // Slide 2
  ["/galleryclient.png", "/galleryclient.png", "/galleryclient.png"],
]

export function Gallery() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#6B4536]">GALLERY</h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
            bulletActiveClass: "swiper-pagination-bullet-active !bg-[#6B4536]",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="gallery-swiper"
        >
          {galleryImages.map((slide, slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {slide.map((image, imageIndex) => (
                  <div key={imageIndex} className="aspect-square relative overflow-hidden rounded-lg">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Gallery image ${slideIndex * 3 + imageIndex + 1}`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

