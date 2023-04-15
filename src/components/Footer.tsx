export function Footer() {
  return (
    <footer className="w-full bg-lac-background-page">
      <div className="flex justify-center items-center flex-col gap-1 px-8 py-4">
        <span className="text-sm text-zinc-400">
          Feito com 💙 por{" "}
          <a
            href="https://github.com/alerrandrojanio"
            target="_blank"
            className=" hover:text-lac-blue"
          >
            Alerrandro Janio
          </a>
        </span>
        <span className="text-sm text-zinc-400">
          Design feito com 💙 por{" "}
          <a
            href="https://github.com/elane-veras"
            target="_blank"
            className=" hover:text-lac-blue"
          >
            Elane Veras
          </a>
        </span>
      </div>
    </footer>
  )
}
