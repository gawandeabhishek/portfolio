import { useState } from "react";
import { Link } from "react-scroll";
import DarkMode from "./DarkMode";
import NavItem from "./NavItem";

let data = ["home", "about", "contact"];
const Navbar = () => {
  const [active, setActive] = useState();
  const [mode, setMode] = useState();

  return (
    <nav className="backdrop-blur-sm bg-white/50 dark:bg-white/5 flex items-center fixed top-0 justify-center w-full h-12">
      {data.map((content, key) => (
        <Link
          to={`${content}`}
          spy={true}
          smooth={true}
          offset={0}
          duration={50}
          onClick={() => {
            setActive(content);
          }}
          className="cursor-pointer"
          key={key}
        >
          <NavItem
            isActive={active}
            key={key}
            content={content}
          />
        </Link>
      ))}

      <div
        className="backdrop-blur-lg bg-zinc-100 dark:bg-zinc-100/5 p-1 rounded-lg aspect-square absolute right-12 cursor-pointer"
        onClick={() => {
          setMode(document.documentElement.classList.toggle("dark"));
        }}
      >
        <DarkMode mode={mode}/>
      </div>
    </nav>
  );
};

export default Navbar;
