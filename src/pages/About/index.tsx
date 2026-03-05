import clsx from "clsx";
import aboutImage from "../../assets/About_img.webp";

export function About() {
  return (
    <div
      className={clsx(
        "relative",
        "z-25",
        "flex",
        "sm:min-h-full",
        "w-full",
        "flex-col",
        "sm:flex-row",
        "justify-center",
        "items-center",
        "gap-10",
        "p-3",
      )}
    >
      <div className="slide-from-left">
        <img
          className="w-90 h-100 sm:w-110 sm:h-140 rainbow shadow-[0_0_10px_#24ebeb]"
          src={aboutImage}
        />
      </div>

      <div
        className={clsx(
          "bg-[#3a3a3a]/80",
          "px-5",
          "py-12",
          "w-90%",
          "sm:w-1/2",
          "flex",
          "flex-col",
          "gap-4",
          "text-lg",
          "rounded-sm",
          "text-slate-200",
          "text-justify",
          "slide-center",
        )}
      >
        <h1
          className={clsx(
            "uppercase",
            "text-6xl",
            "sm:text-7xl",
            "font-bold",
            "font-[Armarna]",
            "text-[#1cdbdb]",
            "text-shadow-[0_0_4px_#39f6f4]",
          )}
        >
          Sobre mim
        </h1>

        <h2 className="text-slate-400 ">Desenvolvedor Frontend Júnior</h2>

        <p>
          Desenvolvedor Front-End Júnior com sólida base em HTML, CSS,
          JavaScript, TypeScript e React JS, atualmente cursando Engenharia de
          Software. Possuo experiência prática no desenvolvimento de aplicações
          web, incluindo a publicação de um sistema web em produção, o que me
          proporcionou vivência real em estruturação de interfaces, organização
          de código e boas práticas de desenvolvimento.
        </p>

        <p>
          Busco oportunidades para evoluir como desenvolvedor front-end,
          contribuindo com interfaces modernas, responsivas e focadas em
          performance, usabilidade e experiência do usuário.
        </p>
      </div>
    </div>
  );
}
