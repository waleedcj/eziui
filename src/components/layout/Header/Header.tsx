import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "../ToggleTheme";
import { SearchBar } from "@/features/SearchBar";
import type { FunctionComponent } from "@/common/types";
import BrandLogo from "@/assets/images/png/logo-dark.png"
import BrandLogoLight from "@/assets/images/png/logo-light.png"
import { useContext } from "react";
import { ThemeContext, ThemeContextInterface } from "@/context/ThemeContext";


export const Header = (): FunctionComponent => {
	const { darkTheme } = useContext(ThemeContext) as ThemeContextInterface;
	return (
		<header className="border-b border-gray-100 bg-background text-gray-500">
			<nav className="container mx-auto flex h-16 items-center justify-between px-4">
				{/* Left section */}
				<div className="flex items-center space-x-8">
					<Link to="/" className="flex items-center">
						<img 
							src={darkTheme ? BrandLogo : BrandLogoLight} 
							alt="Brand Logo" 
							className="h-10 w-auto"
						/>
					</Link>
					<Link
						to="/components"
						className="text-base hover:text-gray-600 transition-colors"
					>
						Components
					</Link>
				</div>

				{/* Right section */}
				<div className="flex items-center space-x-4">
          <ThemeToggle />
					<SearchBar />
				</div>
			</nav>
		</header>
	);
};
