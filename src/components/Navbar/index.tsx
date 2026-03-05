import { useState } from "react";
import { NavbarLink } from "../NavbarLink";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <nav className="sticky top-0 z-50 flex p-3  text-xl justify-center">
      <div className="hidden w-full md:flex justify-evenly gap-8 text-lg">
        <NavbarLink url="/">Home</NavbarLink>
        <NavbarLink url="/about">Sobre</NavbarLink>
        <NavbarLink url="/skills">Habilidades</NavbarLink>
        <NavbarLink url="/projects">Projetos</NavbarLink>
      </div>

      <button
        className="md:hidden text-white z-40"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div
        className={`
    fixed inset-0 z-20 md:hidden
    flex items-start justify-center
    transition-all duration-300 ease-in-out
    ${isOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}
  `}
      >
        <div
          className="absolute inset-0 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`
      relative mt-16
      bg-[#292928]
      w-full
      flex flex-col items-center gap-10 py-6 rounded-xl
      transform transition-all duration-300 ease-in-out
      ${isOpen ? "translate-y-0 scale-100" : "-translate-y-10 scale-95"}
    `}
        >
          {" "}
          <NavbarLink url="/" onClick={() => handleClose()}>
            Home
          </NavbarLink>
          <NavbarLink url="/about" onClick={() => handleClose()}>
            Sobre
          </NavbarLink>
          <NavbarLink url="/skills" onClick={() => handleClose()}>
            Habilidades
          </NavbarLink>
          <NavbarLink url="/projects" onClick={() => handleClose()}>
            Projetos
          </NavbarLink>
        </div>
      </div>
    </nav>
  );
}
