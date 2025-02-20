import { useContext } from "react";
import type { FunctionComponent } from "@/common/types";
import { MyIcons } from "@/assets/images/svg/icons";
import { ThemeContext, ThemeContextInterface } from "@/context/ThemeContext";

export const ThemeToggle = (): FunctionComponent => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext) as ThemeContextInterface;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md relative"
    >
      <div className="relative w-[1.5rem] h-[1.5rem]">
        <MyIcons.SunIcon
          color="#eab308"
          className={`absolute h-[1.5rem] w-[1.3rem] transition-all duration-300
            ${darkTheme ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`}
        />
        <MyIcons.MoonIcon
          className={`absolute h-[1.5rem] w-[1.3rem] transition-all duration-300
            ${darkTheme ? '-rotate-90 scale-0' : 'rotate-0 scale-100'}`}
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};