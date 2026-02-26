import clsx from "clsx";

export function Footer() {
  return (
    <div
      className={clsx(
        "bottom-0",
        "left-0",
        "w-full",
        "flex",
        "items-center",
        "justify-center",
        "p-2",
        "text-slate-300",
        "border-t-[1px]",
        "border-slate-600",
      )}
    >
      <span className="text-center text-xs sm:text-sm md:text-sm lg:text-md">
        © 2026 Marcos Silva. Desenvolvido com React e TypeScript.
      </span>
    </div>
  );
}
