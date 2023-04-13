"use client"
import Image from "next/image"
import { Splide, SplideSlide } from "@splidejs/react-splide"

import "@splidejs/react-splide/css"
import "@splidejs/react-splide/css/skyblue"
import "@splidejs/react-splide/css/core"

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
    <section className="w-full flex items-center justify-center px-8 py-4 mt-4">
      <Splide
        aria-label="Slides LAC"
        options={{
          rewind: true,
          type: "slide",
          speed: 1000,
          autoplay: true,
          interval: 3000,
        }}
      >
        {slides.map((slide) => {
          return (
            <SplideSlide
              key={slide.description}
              className="flex justify-center items-center"
            >
              <Image
                src={slide.url}
                width={1200}
                height={300}
                alt={slide.description}
                className="rounded-3xl"
              />
            </SplideSlide>
          )
        })}
      </Splide>
    </section>
  )
}
