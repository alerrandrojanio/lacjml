import Image, { StaticImageData } from "next/image"

interface DirectorProps {
  name: string
  responsability: string
  photo: StaticImageData
}

export function Director({ name, responsability, photo }: DirectorProps) {
  return (
    <div className="w-full max-w-sm">
      <div className="flex flex-col justify-center gap-4 items-center px-1 pb-4 pt-1">
        <Image
          src={photo}
          alt={name}
          width={200}
          height={200}
          className="rounded-full  "
        />
        <div className="flex flex-col justify-center items-center gap-1">
          <h5 className=" text-lg font-medium text-white bg-lac-blue px-4 py-1 rounded-3xl">
            {name}
          </h5>
          <span className="text-lg text-zinc-500 font-semibold ">
            {responsability}
          </span>
        </div>
      </div>
    </div>
  )
}
