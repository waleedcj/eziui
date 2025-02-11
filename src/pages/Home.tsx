import type { FunctionComponent } from "@/common/types";
import { MainLayout } from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import mockup from "@/assets/images/png/mock.png";
import swmansion from "@/assets/images/webp/swmansion.webp";
import { MyIcons } from "@/assets/images/svg/icons";
import { Link } from "@tanstack/react-router";

export const Home = (): FunctionComponent => {
	return (
		<MainLayout>
			<div className="min-h-screen">
				{" "}
				{/* Changed from bg-black to bg-black/80 */}
				{/* Hero Section */}
				<div className="container mx-auto px-4 py-20">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						{/* Left Content */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							{/* <span className="bg-gray-800 text-blue-400 px-4 py-1 rounded-full text-sm">
                Introducing React Native Animations
              </span> */}
							<h1 className="text-5xl md:text-6xl font-bold mt-6 mb-6 text-neutral-900">
								Make your apps look{" "}
								<span className="text-[#FF851B]">10x awesome</span>
							</h1>
							<p className="text-xl text-gray-500 mb-8">
								Production-ready React Native animations that are lightweight
								and performant. Copy-paste beautiful components without the
								bloat, built by a developer for developers ❤️.
							</p>
							<div className="flex gap-4">
								<Link to="/components">
									<button
										className="bg-gray-800  px-8 py-3 rounded-xl 
													shadow-md hover:shadow-xl 
													font-medium text-gray-100 
													transition-all duration-200 ease-in-out
													hover:scale-[1.05]"
									>
										Browse Components
									</button>
								</Link>
							</div>

							{/* Tech Stack */}
							<div className="relative mt-10">
								{/* <div className="block sm:hidden absolute h-full w-20 bg-white dark:bg-black right-0 [mask-image:linear-gradient(to_left,white,transparent)] z-40"></div> */}
								<div
									className="flex justify-start items-center mb-4 overflow-x-auto relative z-20 no-visible-scrollbar"
									style={{ scrollbarWidth: "none" }}
								>
									<div className="flex items-center space-x-2 mr-4">
										<MyIcons.React className="md:h-11 md:w-11 h-4 w-4 text-gray-500 flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity" />
										<span className="text-sm font-semibold text-gray-500 flex-shrink-0">
											React Native
										</span>
									</div>

									<div className="flex items-center space-x-2 mr-4">
										<MyIcons.Lottie className="md:h-10 md:w-10 h-4 w-4 text-gray-500 flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity" />
										<span className="text-sm font-semibold text-gray-500 flex-shrink-0">
											Lottie
										</span>
									</div>

									<div className="flex items-center space-x-2 mr-4">
										<img
											src={swmansion}
											alt="SWmansion"
											className="md:h-10 md:w-10 h-4 w-4 rounded-xl text-gray-500 flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity"
										/>
										<span className="text-sm font-semibold text-gray-500 flex-shrink-0">
											Software Mansion
										</span>
									</div>
								</div>
							</div>
						</motion.div>

						{/* Right Content - iPhone Mockups */}
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="relative max-w-2xl mx-auto"
						>
							<div className="grid grid-cols-2 gap-2">
								<div className="space-y-2">
									<div className=" rounded-xl p-2 hover:scale-105 transition-transform">
										<img
											src={mockup}
											alt="Animation Demo 1"
											className="rounded-lg  h-auto w-auto object-cover"
										/>
									</div>
									<div className=" rounded-xl p-2 hover:scale-105 transition-transform">
										<img
											src={mockup}
											alt="Animation Demo 2"
											className="rounded-lg  h-auto w-auto object-cover"
										/>
									</div>
								</div>
								<div className="space-y-2 mt-4">
									<div className="rounded-xl p-2 hover:scale-105 transition-transform">
										<img
											src={mockup}
											alt="Animation Demo 3"
											className="rounded-lg  h-auto w-auto object-cover"
										/>
									</div>
									<div className=" rounded-xl p-2 hover:scale-105 transition-transform">
										<img
											src={mockup}
											alt="Animation Demo 4"
											className="rounded-lg h-auto w-auto object-cover"
										/>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
				{/* Features Section */}
				<div className="container mx-auto px-4 py-20">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="text-center mb-16"
					>
						<h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
							As simple as copy and paste
						</h2>
						<p className="text-gray-500 text-xl">
							Just drop the code into your UI folder and start using these
							components right away. No complex setup needed.
						</p>
					</motion.div>

					<div className="grid md:grid-cols-3 gap-8">
						{features.map((feature, index) => (
							<motion.div
								key={feature.title}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.2 }}
								className="bg-gray-100 p-6 rounded-xl shadow-lg transition-colors"
							>
								<div className="flex flex-row gap-2 items-center">
								<div className="text-3xl mb-4">{feature.icon}</div>
								<h3 className="text-xl text-neutral-900 font-semibold mb-2">
									{feature.title}
								</h3>
								</div>
								
								<p className="text-gray-500">{feature.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

// Update the features array
const features = [
	{
		icon: "🚀",
		title: "Minimal Dependencies",
		description:
			"Built with Software Mansion's Reanimated and Gesture Handler. No additional animation libraries needed.",
	},
	{
		icon: "📋",
		title: "Copy & Paste Ready",
		description:
			"Drop the components into your project and they'll work instantly with your existing React Native setup.",
	},
	{
		icon: "⚡",
		title: "Native Performance",
		description:
			"Powered by Reanimated 3, all animations run on the native thread for butter-smooth 60 FPS performance.",
	},
];
