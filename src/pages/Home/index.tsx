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
        "justify-center",
        "sm:justify-evenly",
        "bg-center",
        "bg-no-repeat",
        "flex-col-reverse",
        "sm:flex-row",
        "z-10",
        "gap-8 sm:gap-0",
      )}
    >
      <div className="absolute inset-0 bg-[#292928]/80 " />

      <div className="z-20 text-slate-50 flex flex-col pb-5 gap-2 sm:gap-10 slide-from-left">
        <div className="flex flex-col px-8">
          <h3 className="text-md sm:text-2xl">Olá! eu sou</h3>
          <h1 className="text-6xl sm:text-8xl font-[Armarna]">Marcos Silva</h1>
          <span className="text-slate-300 sm:text-slate-400 pb-5 text-md sm:text-2xl">
            Desenvolvedor Júnior
          </span>
        </div>

        <div className="px-8">
          <button
            className={clsx(
              "p-3",
              "sm:p-6",
              "w-50",
              "sm:w-80",
              "bg-[#383838]",
              "cursor-pointer",
              "text-[11px]",
              "sm:text-lg",
              "uppercase",
              "rounded-full",
              "flex",
              "gap-2",
              "justify-center",
              "items-center",
              "hover:bg-[#1cdbdb]",
              "hover:text-slate-950",
              "transition-colors duration-600",
            )}
          >
            baixar currículo {<FileDown />}
          </button>
        </div>
      </div>

      <div className="z-20 relative sm:mt-auto">
        <img
          className="w-65 h-89 sm:w-95 sm:h-137 lg:w-120 lg:h-167 xl:w-120 slide-center"
          src={myImage}
        />

        <div className="absolute sm:hidden flex flex-col gap-1 items-end mb-5 sm:shadow-[0_0_10px_#24ebeb] shadow-none">
          <div className="h-0.5 w-85 r-0 b-0 bg-[#24ebeb] shadow-[0_0_10px_#24ebeb]" />
          <span className="relative w-2 h-2 bottom-[9px] right-84 bg-[#24ebeb] rounded-full"></span>

          <div className="h-0.5 w-60 bg-[#21bdbd] shadow-[0_0_8px_#24ebeb]" />
        </div>
      </div>
    </div>
  );
}
