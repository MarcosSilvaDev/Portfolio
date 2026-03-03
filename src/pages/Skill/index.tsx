import clsx from "clsx";
import { LogoList } from "../../components/LogoList";

export function Skills() {
  return (
    <div
      className={clsx(
        "relative",
        "z-25",
        "flex",
        "flex-col",
        "sm:flex-row",
        "justify-evenly",
        "items-center",
        "h-200",
        "sm:h-full",
        "text-white",
        "py-2",
        "px-5",
        "sm:px-8",
        "gap-4",
      )}
    >
      <div className="w-sm sm:w-1/3 ">
        <h1 className="pb-4 text-6xl uppercase font-[Armarna] text-[#08e7e7] text-shadow-[0_0_4px_#39f6f4]">
          Habilidades
        </h1>

        <div className="bg-[#2c2c2c]/85 rounded-lg shadow-[0_0_7px_#666666] p-2 slide-from-bottom">
          <ul
            className={clsx(
              "border-2",
              "border-[#07ecec]",
              "px-3",
              "rounded-lg",
              "text-[#fffefe]",
              "py-6",
              "flex",
              "flex-col",
              "gap-4",
            )}
          >
            <li>Design responsivo</li>
            <li>Proatividade</li>
            <li>Comunicação</li>
            <li>Trabalho em equipe</li>
            <li>Resolução de problemas</li>
            <li>Consumo de API</li>
          </ul>
        </div>
      </div>

      <div className="bg-[#3f3f3f]/85 p-4 flex flex-col gap-5 rounded-lg slide-from-bottom">
        <div>
          <h1 className="pb-4 text-2xl text-[#07ecec]">Ferramentas</h1>
          <div className="border-2 border-[#07ecec] rounded-lg flex p-7 sm:p-10">
            <div className="grid grid-cols-4 gap-7">
              <LogoList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
