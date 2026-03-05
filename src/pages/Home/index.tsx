import clsx from "clsx";
import { FileDown } from "lucide-react";
import myImage from "../../assets/Home_img.webp";
import github from "../../assets/logos/github.svg";
import instagram from "../../assets/logos/instagram.svg";
import linkedin from "../../assets/logos/linkedin.svg";
import whasstapp from "../../assets/logos/whatsapp.svg";
import cv from "../../assets/CURRICULO_MARCOS_SILVA_DESENVOLVEDOR_JUNIOR.pdf";

const redesSociais = [
  { src: github, href: "https://github.com/MarcosSilvaDev", name: "Github" },
  {
    src: instagram,
    href: "https://www.instagram.com/marcossilva_cj/",
    name: "Instagram",
  },
  {
    src: linkedin,
    href: "https://linkedin.com/in/marcos-silva-0a3472244",
    name: "Linkedin",
  },
  { src: whasstapp, href: "https://wa.me/556392871011", name: "Whatsapp" },
];

export function Home() {
  return (
    <div
      className={clsx(
        "relative",
        "min-h-full",
        "w-full",
        "flex",
        "items-center",
        "justify-center",
        "sm:justify-evenly",
        "bg-center",
        "bg-no-repeat",
        "flex-col-reverse",
        "sm:flex-row",
        "z-25",
        "gap-8 sm:gap-0",
      )}
    >
      <div className="z-20 text-slate-50 flex flex-col pb-5 gap-2 sm:gap-10 slide-from-left">
        <div className="flex flex-col px-8">
          <div className=" flex gap-5 py-7">
            {redesSociais.map((item) => (
              <a
                target="_blank"
                href={item.href}
                rel="noopener noreferrer"
                title={item.name}
              >
                <img
                  className={clsx(
                    "w-10",
                    "h-10",
                    "grayscale",
                    "hover:grayscale-0",
                    "transition",
                    "duration-300",
                    "hover:scale-105",
                    "cursor-pointer",
                  )}
                  src={item.src}
                />
              </a>
            ))}
          </div>
          <h3 className="text-md sm:text-2xl">Olá! eu sou</h3>
          <h1 className="text-6xl sm:text-7xl font-[Armarna]">Marcos Silva</h1>
          <span className="text-slate-300 sm:text-slate-400 pb-5 text-md sm:text-2xl">
            Desenvolvedor Frontend Júnior
          </span>
        </div>

        <div className="px-8">
          <a
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
            href={cv}
            download="CURRICULO_MARCOS_SILVA_DESENVOLVEDOR_JUNIOR.pdf"
          >
            baixar currículo {<FileDown />}
          </a>
        </div>
      </div>

      <div className="z-20 relative sm:mt-auto">
        <img
          className="w-65 h-89 sm:w-95 sm:h-137 lg:w-120 lg:h-164 xl:w-120 slide-center"
          src={myImage}
          aria-label="Imagem do profissional"
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
