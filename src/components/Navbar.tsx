import Image from "next/image"

import { FaFacebookF } from "react-icons/fa"
import { BsInstagram, BsWhatsapp } from "react-icons/bs"

import Logo from "../../public/img/lac-logo.svg"

const menu = [
  { title: "Início", href: "#index" },
  { title: "Diretoria", href: "#directory" },
  { title: "Unidades", href: "#units" },
  { title: "Certificados", href: "#certifications" },
  { title: "Feedback", href: "#index" },
  { title: "Convênios", href: "#index" },
  { title: "Sobre", href: "#index" },
]

export function Navbar() {
  return (
    <nav
      id="index"
      className="w-full flex justify-between items-center px-8 py-1 bg-white"
    >
      <div>
        <Image src={Logo} alt="Logo LAC" className=" w-40 h-20" />
      </div>

      <div className="max-md:hidden">
        <ul className="flex justify-center flex-wrap gap-10">
          {menu.map((item) => {
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-gray-500 text-lg font-semibold hover:text-lac-blue"
                >
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="flex items-center justify-center gap-6">
        <div className="max-md:hidden">
          <ul className="flex items-center gap-2 max-md:gap-2 ">
            <li className="bg-lac-blue p-2 rounded-full hover:bg-lac-darkblue">
              <a href="#">
                <FaFacebookF className="h-4 w-4 text-white max-md:h-3 max-md:w-3" />
              </a>
            </li>
            <li className="bg-lac-blue p-2 rounded-full flex hover:bg-lac-darkblue">
              <a href="#">
                <BsInstagram className="h-4 w-4 text-white max-md:h-3 max-md:w-3" />
              </a>
            </li>
            <li className="bg-lac-blue p-2 rounded-full flex hover:bg-lac-darkblue">
              <a href="#">
                <BsWhatsapp className="h-4 w-4 text-white max-md:h-3 max-md:w-3" />
              </a>
            </li>
          </ul>
        </div>

        <a
          href="https://laccrateus.com.br/logins/login"
          target="_blank"
          className="bg-lac-blue text-white font-semibold px-4 py-2 rounded-xl hover:bg-lac-darkblue"
        >
          Resultados
        </a>
      </div>
    </nav>
  )
}
