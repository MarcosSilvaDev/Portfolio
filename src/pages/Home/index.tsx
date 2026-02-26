import clsx from "clsx";
import { FileDown } from "lucide-react";
import myImage from "../../assets/my_image.webp";

export function Home() {
  return (
    <div
      className={clsx(
        "relative",
        "min-h-full",
        "w-full",
        "bg-[url(/Background.webp)]",
        "bg-cover",
        "flex",
        "items-center",
        "justify-around",
        "bg-center",
        "bg-no-repeat",
        "flex-col-reverse",
        "sm:flex-row",
        "z-10",
        "gap-8",
      )}
    >
      <div className="absolute inset-0 bg-[#292928]/80" />

      <div className="z-20 text-slate-50 flex flex-col pb-5">
        <h3 className="text-md">Olá! eu sou</h3>
        <h1 className="text-6xl sm:text-4xl font-[Armarna]">Marcos Silva</h1>
        <span className="text-slate-300 pb-5">Desenvolvedor Júnior</span>

        <button
          className={clsx(
            "p-4",
            "w-50",
            "bg-[#383838]",
            "cursor-pointer",
            "text-xs",
            "uppercase",
            "rounded-full",
            "flex",
            "gap-2",
            "justify-center",
            "items-center",
            "hover:bg-[#06c7c7]",
            "hover:text-slate-950",
            "transition-colors duration-600",
          )}
        >
          baixar currículo {<FileDown />}
        </button>
      </div>

      <div className="z-20 pb-3">
        <img className="w-55 h-75" src={myImage} />
      </div>
    </div>
  );
}
