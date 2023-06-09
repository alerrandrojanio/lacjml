import { Url } from "next/dist/shared/lib/router/router"
import Image, { StaticImageData } from "next/image"

import { RiMapPinFill } from "react-icons/ri"
import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs"

interface UnitCardProps {
  name: string
  andress: string
  photo: StaticImageData
  tel: string
  url_contact: string
}

export function UnitCard({
  name,
  andress,
  photo,
  tel,
  url_contact,
}: UnitCardProps) {
  return (
    <div className="w-full max-w-sm bg-white shadow rounded-xl py-4">
      <div className="flex flex-col items-center justify-center gap-2">
        <Image src={photo} alt={name} className="rounded-lg" />

        <div className="flex items-center justify-center text-zinc-600 font-semibold text-xl select-none">
          {name}
        </div>

        <div className="w-full flex flex-col justify-center gap-2 px-8 select-none">
          <div className="flex items-center gap-3">
            <RiMapPinFill className="w-6 h-6 text-lac-blue" />
            <span className="text-lg font-semibold text-zinc-500 ">
              {andress}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <BsFillTelephoneFill className="w-5 h-5 text-lac-blue" />
            <span className="text-lg font-semibold text-zinc-500">{tel}</span>
          </div>
        </div>

        <a
          href={url_contact}
          target="_blank"
          className="flex items-center justify-center gap-2 py-2 px-3 mt-2 rounded-xl bg-lac-blue hover:bg-lac-darkblue"
        >
          <BsWhatsapp className="w-5 h-5 text-white" />
          <span className="text-white font-semibold text-xl">Whatsapp</span>
        </a>
      </div>
    </div>
  )
}
