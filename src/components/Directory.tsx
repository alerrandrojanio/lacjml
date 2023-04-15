import { Director } from "@/components/Director"

import Photo from "../../public/img/directory/pessoa.jpg"

const directors = [
  {
    name: "Moacir Farias de Oliveira",
    responsability: "Diretor Geral",
    photo: Photo,
  },
  {
    name: "Luciana Menezes de Oliveira",
    responsability: "Diretora Técnica",
    photo: Photo,
  },
  {
    name: "Moacir Farias de Oliveira Jr.",
    responsability: "Diretor Financeiro",
    photo: Photo,
  },
]

export function Directory() {
  return (
    <section id="directory" className="w-full py-10 ">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="font-bold text-4xl text-zinc-600 ">Diretoria</h1>

        <div className="w-full flex flex-row justify-center gap-5 flex-wrap mt-8">
          {directors.map((director) => {
            return (
              <Director
                key={director.name}
                name={director.name}
                responsability={director.responsability}
                photo={director.photo}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
