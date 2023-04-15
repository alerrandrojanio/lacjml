import { UnitCard } from "./UnitCard"

import Photo from "../../public/img/directory/pessoa.jpg"

import { Swiper, SwiperSlide } from "swiper/react"

import { Navigation, Pagination, Scrollbar, A11y } from "swiper"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "swiper/css/autoplay"

const units = [
  {
    name: "Unidade Central Crateús",
    andress: "Rua Ubaldino Souto Maior, 1264",
    photo: Photo,
    tel: "(88) 3691-1991",
    url_contact: "https://wa.me/558888772649",
  },
  {
    name: "Unidade Cidade Nova Crateús",
    andress: "Rua Anísio Frota, 740",
    photo: Photo,
    tel: "(88) 98868-0429",
    url_contact: "https://wa.me/5588992663681",
  },
  {
    name: "Unidade Nova Russas",
    andress: "Av Antº. Joaquim de Sousa, 1282",
    photo: Photo,
    tel: "(88) 99296-7335",
    url_contact: "https://wa.me/message/EUKB62OGKQ6AD1",
  },

  {
    name: "Unidade de Ipaporanga",
    andress: "Av Pedro Correia Leitão, 111",
    photo: Photo,
    tel: "(88) 98198-7424",
    url_contact: "https://wa.me/5588981987424",
  },
  {
    name: "Unidade Tamboril",
    andress: "Rua José Rangel Borges, 165",
    photo: Photo,
    tel: "(88) 99298-8088",
    url_contact: "",
  },
  {
    name: "Unidade Novo Oriente",
    andress: "Rua Pedro Carvalhedo, 205",
    photo: Photo,
    tel: "(88) 99968-2166",
    url_contact: "https://wa.me/message/RJEHRAAG4NZXF1",
  },
]

export function Units() {
  return (
    <section id="units" className="w-full py-10 bg-lac-blue ">
      <div className=" flex flex-col justify-center items-center">
        <h1 className="font-bold text-4xl text-white">Unidades</h1>

        <div className="w-full px-16 mt-8 max-sm:px-3">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={4}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              375: {
                width: 350,
                slidesPerView: 1,
              },
              640: {
                width: 640,
                slidesPerView: 2,
              },
              768: {
                width: 768,
                slidesPerView: 2,
              },
            }}
          >
            {units.map((unit) => {
              return (
                <SwiperSlide key={unit.name}>
                  <UnitCard
                    name={unit.name}
                    andress={unit.andress}
                    photo={unit.photo}
                    tel={unit.tel}
                    url_contact={unit.url_contact}
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
