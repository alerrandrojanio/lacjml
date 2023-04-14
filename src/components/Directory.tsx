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
    <section className="w-full flex flex-col justify-center items-center space-y-8 mt-8">
      <h1 className="font-bold text-3xl text-zinc-600">Diretoria</h1>

      <div className="w-full flex flex-row justify-center gap-5 flex-wrap">
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
    </section>
  )
}
