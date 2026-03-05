import clsx from "clsx";
import projetoImg1 from "../../assets/projetos/projeto1.webp";
import projetoImg2 from "../../assets/projetos/projeto2.webp";

export function Project() {
  return (
    <div
      className={clsx(
        "relative z-0 w-full h-full text-slate-50",

        // Mobile
        "flex overflow-x-auto snap-x snap-mandatory scroll-smooth",

        // desktop
        "sm:overflow-visible sm:justify-evenly sm:items-center",
        "gap-4 px-5 py-4 sm:px-0",
      )}
    >
      <div
        className={clsx(
          "w-85 h-105 sm:h-110",
          "bg-[#222222]/90",
          "rounded-lg",
          "p-2 py-4",
          "shadow-[0_0_7px_#666666]",
          "flex flex-col items-center justify-between",
          "slide-from-bottom",
          "min-w-[calc(100%-2rem)] snap-center sm:min-w-0",
        )}
      >
        <img
          className="w-full h-1/2 object-cover rounded-t-lg"
          src={projetoImg1}
          alt="Projeto"
        />

        <span
          className={clsx(
            "border-2 border-green-700 p-0.5 rounded-lg",
            "text-green-500 text-xs",
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
            "px-12 py-3 text-xs uppercase",
            "bg-[#494949] text-slate-50 rounded-full",
            "hover:bg-[#1cdbdb] hover:text-slate-950",
            "transition-colors duration-600",
          )}
          target="_blank"
          rel="noreferrer"
        >
          Acessar
        </a>
      </div>

      {/* Card 2 */}
      <div
        className={clsx(
          "w-85 h-105 sm:h-110",
          "bg-[#222222]/90",
          "rounded-lg",
          "p-2 py-4",
          "shadow-[0_0_7px_#666666]",
          "flex flex-col items-center justify-between",
          "slide-from-bottom",
          "min-w-[calc(100%-2rem)] snap-center sm:min-w-0",
        )}
      >
        <img
          className="w-full h-1/2 object-cover rounded-t-lg"
          src={projetoImg2}
          alt="Projeto"
        />

        <span
          className={clsx(
            "border-2 border-slate-400 p-0.5 rounded-lg",
            "text-slate-300 text-xs",
          )}
        >
          Em desenvolvimento
        </span>

        <h1 className="text-xl text-center font-bold text-[#08e7e7]">Blog</h1>

        <ul className="flex gap-4 text-xs sm:text-sm">
          <li>React</li>
          <li>Next</li>
          <li>Tailwind CSS</li>
          <li>Sqlite</li>
        </ul>

        <a
          href="https://chronos-pomodoro-rho.vercel.app/"
          className={clsx(
            "px-12 py-3 text-xs uppercase",
            "bg-[#494949] text-slate-50 rounded-full",
            "transition-colors duration-600",
            "pointer-events-none opacity-50",
          )}
          target="_blank"
          rel="noreferrer"
        >
          Acessar
        </a>
      </div>
    </div>
  );
}
