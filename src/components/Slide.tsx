"use client"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "swiper/css/autoplay"

import SlideTests from "../../public/img/slide/slide-exames.png"
import SlideCertifications from "../../public/img/slide/slide-certificados.png"
import SlideResults from "../../public/img/slide/slide-resultados.png"

const slides = [
  {
    description: "Slide Tests",
    url: SlideTests,
  },
  {
    description: "Slide Certifications",
    url: SlideCertifications,
  },
  {
    description: "Slide Results",
    url: SlideResults,
  },
]

export function Slide() {
  return (
    <section className="w-full flex justify-center px-8 py-4 mt-4 max-sm:px-1">
      <div className="w-full flex items-center justify-center">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides={true}
          pagination={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className=""
        >
          {slides.map((slide) => {
            return (
              <SwiperSlide key={slide.description} className="">
                <Image
                  src={slide.url}
                  alt={slide.description}
                  className="rounded-3xl"
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}
