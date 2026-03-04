import clsx from "clsx";
import projetoImg1 from "../../assets/projetos/projeto1.webp";

export function Project() {
  return (
    <div className="relative z-0 flex justify-center items-center w-full h-full text-slate-50">
      <div
        className={clsx(
          "w-85",
          "h-105 ",
          "sm:h-110",
          "bg-[#222222]/80",
          "rounded-lg",
          "p-2",
          "py-4",
          "shadow-[0_0_7px_#666666]",
          "flex",
          "flex-col items-center justify-between",
        )}
      >
        <img
          className="w-full h-1/2 object-cover rounded-t-lg"
          src={projetoImg1}
          alt="Projeto"
        />
        <span
          className={clsx(
            "border-2",
            "border-green-700",
            "p-0.5",
            "rounded-lg",
            "text-green-500",
            "text-xs",
          )}
        >
          ● Online
        </span>

        <h1 className="text-xl text-center font-bold text-[#08e7e7]">
          Automatização da técnica pomodoro
        </h1>

        <ul className="flex gap-4 text-xs sm:text-sm">
          <li>React JS</li>
          <li>TypeScript</li>
          <li>Vite</li>
          <li>Toastify</li>
        </ul>

        <a
          href="https://chronos-pomodoro-rho.vercel.app/"
          className={clsx(
            "px-12",
            "py-3",
            "text-xs",
            "uppercase",
            "bg-[#494949]",
            "text-slate-50",
            "rounded-full",
            "hover:bg-[#1cdbdb]",
            "hover:text-slate-950",
            "transition-colors duration-600",
          )}
          target="_blank"
        >
          Acessar
        </a>
      </div>
    </div>
  );
}
