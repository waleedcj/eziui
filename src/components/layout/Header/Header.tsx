import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "../ToggleTheme";
import { SearchBar } from "@/features/SearchBar";
import type { FunctionComponent } from "@/common/types";
import BrandLogo from "@/assets/images/png/logo-dark.png"

export const Header = (): FunctionComponent => {
	return (
		<header className="border-b border-gray-800 bg-black text-gray-300">
			<nav className="container mx-auto flex h-16 items-center justify-between px-4">
				{/* Left section */}
				<div className="flex items-center space-x-8">
					<Link to="/" className="flex items-center">
						<img 
							src={BrandLogo} 
							alt="Brand Logo" 
							className="h-10 w-auto"
						/>
					</Link>
					<Link
						to="/components"
						className="text-sm hover:text-white transition-colors"
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
