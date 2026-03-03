import css from "../../assets/logos/css.svg";
import github from "../../assets/logos/github.svg";
import html from "../../assets/logos/html.svg";
import javascript from "../../assets/logos/javascript.svg";
import mysql from "../../assets/logos/mysql.svg";
import nodejs from "../../assets/logos/node.svg";
import postman from "../../assets/logos/postman.svg";
import reactjs from "../../assets/logos/reactjs.svg";
import tailwind from "../../assets/logos/tailwind.svg";
import typescript from "../../assets/logos/typescript.svg";
import vscode from "../../assets/logos/vscode.svg";

const logos = [
  { src: css, alt: "CSS" },
  { src: github, alt: "GitHub" },
  { src: html, alt: "HTML" },
  { src: javascript, alt: "JavaScript" },
  { src: mysql, alt: "MySQL" },
  { src: nodejs, alt: "Node.js" },
  { src: postman, alt: "Postman" },
  { src: reactjs, alt: "React" },
  { src: tailwind, alt: "Tailwind CSS" },
  { src: typescript, alt: "TypeScript" },
  { src: vscode, alt: "VS Code" },
];

export function LogoList() {
  return (
    <>
      {logos.map((logo) => (
        <img
          key={logo.alt}
          src={logo.src}
          alt={logo.alt}
          title={logo.alt}
          width={60}
          height={60}
          loading="lazy"
          decoding="async"
        />
      ))}
    </>
  );
}
