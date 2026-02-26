import { NavbarLink } from "../NavbarLink";

export function Navbar() {
  return (
    <nav className="flex p-3 justify-evenly z-20">
      <NavbarLink url="/">Home</NavbarLink>
      <NavbarLink url="/about">Sobre</NavbarLink>
      <NavbarLink url="/skills">Habilidades</NavbarLink>
      <NavbarLink url="/projects">Projetos</NavbarLink>
      <NavbarLink url="/contact">Contato</NavbarLink>
    </nav>
  );
}
