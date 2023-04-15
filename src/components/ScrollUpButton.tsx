import { useState, useEffect } from "react"
import { FaArrowCircleUp } from "react-icons/fa"

export function ScrollUpButton() {
  const [scrollUpButton, setScrollUpButton] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrollUpButton(true)
      } else {
        setScrollUpButton(false)
      }
    })
  }, [])

  function scrollUp() {
    window.scrollTo({ top: 0 })
  }

  return (
    <div>
      {scrollUpButton && (
        <button
          className="z-50 flex justify-center items-center text-white bg-lac-blue fixed bottom-10 right-6 p-2 rounded-lg"
          onClick={scrollUp}
        >
          <FaArrowCircleUp className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}
