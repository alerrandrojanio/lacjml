import Image from "next/image"
import { Inter } from "next/font/google"
import { Navbar } from "@/components/Navbar"
import { Slide } from "@/components/Slide"
import { Directory } from "@/components/Directory"
import { Units } from "@/components/Units"

const inter = Inter({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function Home() {
  return (
    <div className={`${inter.variable} h-screen `}>
      <Navbar />
      <main className="">
        <Slide />
        <Directory />
        <Units />
      </main>
    </div>
  )
}
