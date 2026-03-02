import clsx from "clsx";
import type React from "react";
import { NavLink } from "react-router-dom";

type NavbarLinkProps = {
  url: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export function NavbarLink({ url, children, onClick }: NavbarLinkProps) {
  return (
    <NavLink
      to={url}
      onClick={onClick}
      className={({ isActive }) =>
        isActive
          ? "text-[#05ffff]"
          : clsx(
              "text-slate-300",
              "hover:text-[#05ffff]",
              "hover:[text-shadow:0_0_5px_#39f6f4]",
              "transition",
              "duration-200",
            )
      }
    >
      <h1>{children}</h1>
    </NavLink>
  );
}
