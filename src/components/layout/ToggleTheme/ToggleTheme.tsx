import {  useState } from "react";
import type { FunctionComponent } from "@/common/types";
// import { ThemeContext, ThemeContextInterface } from "../context/ThemeProvider";
import { IconSun } from "@tabler/icons-react";
import { IconMoon } from "@tabler/icons-react";




export const ThemeToggle = (): FunctionComponent => {
//   const { darkTheme, toggleTheme } = useContext(
//     ThemeContext
//   ) as ThemeContextInterface;

const [darkTheme, setDarkTheme] = useState(false);

const toggleTheme = () => {
  setDarkTheme(!darkTheme);
  // You can add localStorage or other theme persistence here if needed
};

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md relative"
    >
      <div className="relative w-[1.5rem] h-[1.5rem]">
        {/* Sun icon - show in dark theme */}
        <IconSun
        color="#eab308"
          className={`absolute h-[1.5rem] w-[1.3rem] transition-all duration-300
            ${!darkTheme ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`}
        />
        {/* Moon icon - show in light theme */}
        <IconMoon
        // color="#1e3a8a"
          className={`absolute h-[1.5rem] w-[1.3rem] transition-all duration-300
            ${!darkTheme ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`}
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};