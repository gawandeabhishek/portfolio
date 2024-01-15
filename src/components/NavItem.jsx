import React from "react";

const NavItem = ({ content, isActive }) => {
  return (
    <div
      className={`text-base px-4 hover:text-sky-500 hover:dark:text-cyan-300 ease-out duration-1000 ${isActive === content ? "text-sky-500 dark:text-cyan-300" : " text-slate-400 dark:text-slate-500"}`}
    >
      {content}
    </div>
  );
};

export default NavItem;
