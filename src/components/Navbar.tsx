import { FaFacebookF } from "react-icons/fa"
import { BsInstagram, BsWhatsapp } from "react-icons/bs"

export function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-16 py-4">
      <div>Logo</div>

      <div className="max-md:hidden">
        <ul className="flex justify-center flex-wrap gap-10">
          <li>
            <a
              href="#"
              className="text-gray-500 font-semibold hover:text-blue-950"
            >
              Início
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 font-semibold hover:text-blue-950"
            >
              Diretoria
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 font-semibold hover:text-blue-950"
            >
              Unidades
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 font-semibold hover:text-blue-950"
            >
              Certificados
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 font-semibold hover:text-blue-950"
            >
              Feedback
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 font-semibold hover:text-blue-950"
            >
              Convênios
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 font-semibold hover:text-blue-950"
            >
              Sobre
            </a>
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-center gap-6 ">
        <div>
          <ul className="flex items-center gap-4 max-md:gap-2">
            <li className="bg-blue-800 p-2 rounded-full hover:bg-blue-700">
              <a href="#">
                <FaFacebookF className="h-4 w-4 text-white max-md:h-3 max-md:w-3" />
              </a>
            </li>
            <li className="bg-blue-800 p-2 rounded-full flex hover:bg-blue-700">
              <a href="#">
                <BsInstagram className="h-4 w-4 text-white max-md:h-3 max-md:w-3" />
              </a>
            </li>
            <li className="bg-blue-800 p-2 rounded-full flex hover:bg-blue-700">
              <a href="#">
                <BsWhatsapp className="h-4 w-4 text-white max-md:h-3 max-md:w-3" />
              </a>
            </li>
          </ul>
        </div>

        <a
          href="https://laccrateus.com.br/logins/login"
          target="_blank"
          className="bg-blue-800 text-white font-semibold px-4 py-2 rounded-xl hover:bg-blue-700"
        >
          Resultados
        </a>
      </div>
    </nav>
  )
}
