import { UnitCard } from "./UnitCard"

import Photo from "../../public/img/directory/pessoa.jpg"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

const units = [
  {
    name: "Unidade Central Crateús",
    andress: "Rua Ubaldino Souto Maior, 1264",
    photo: Photo,
    tel: "(88) 3691-1991",
    url_contact: "",
  },
  {
    name: "Unidade Nova Russas",
    andress: "Rua Teste, 1264",
    photo: Photo,
    tel: "(88) 3691-8989",
    url_contact: "",
  },
  {
    name: "Unidade Nova Rusasasasasas",
    andress: "Rua Teste, 1264",
    photo: Photo,
    tel: "(88) 3691-8989",
    url_contact: "",
  },
  {
    name: "Unidade Nova Rusasasasas",
    andress: "Rua Teste, 1264",
    photo: Photo,
    tel: "(88) 3691-8989",
    url_contact: "",
  },
  {
    name: "Unidade Nova Rasssasas",
    andress: "Rua Teste, 1264",
    photo: Photo,
    tel: "(88) 3691-8989",
    url_contact: "",
  },
]

export function Units() {
  return (
    <section className="w-full flex flex-col justify-center items-center mb-8 pb-8 bg-lac-background-units ">
      <h1 className="font-bold text-3xl my-9 text-white">Unidades</h1>

      <div className="w-full px-16">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
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
    </section>
  )
}
