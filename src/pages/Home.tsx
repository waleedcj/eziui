// import { useTranslation } from "react-i18next";
import type { FunctionComponent } from "@/common/types";
import { MainLayout } from "@/components/layout/MainLayout";
import { motion } from "framer-motion";

export const Home = (): FunctionComponent => {
	return (
		<MainLayout>
		<div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
			{/* Hero Section */}
			<div className="container mx-auto px-4 py-20">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center"
				>
					<h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
						React Native Animations
					</h1>
					<p className="text-xl md:text-2xl text-gray-300 mb-8">
						Copy-paste beautiful animations built with React Native's Animated
						API.
						<br />
						No external UI libraries required.
					</p>
					<a
						href="/components"
						className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
					>
						Browse Components
					</a>
				</motion.div>

				{/* Feature Grid */}
				<div className="grid md:grid-cols-3 gap-8 mt-20">
					{features.map((feature, index) => (
						<motion.div
							key={feature.title}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className="bg-gray-800 p-6 rounded-xl"
						>
							<div className="text-blue-400 text-3xl mb-4">{feature.icon}</div>
							<h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
							<p className="text-gray-400">{feature.description}</p>
						</motion.div>
					))}
				</div>

				{/* Code Preview Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					className="mt-20"
				>
					<div className="bg-gray-800 p-6 rounded-xl">
						<div className="flex items-center mb-4">
							<div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
							<div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
							<div className="w-3 h-3 rounded-full bg-green-500"></div>
						</div>
						<pre className="text-sm text-gray-300 overflow-x-auto">
							<code>{`import { Animated } from 'react-native';
	
	const fadeAnim = useRef(new Animated.Value(0)).current;
	
	Animated.timing(fadeAnim, {
	  toValue: 1,
	  duration: 1000,
	  useNativeDriver: true,
	}).start();`}</code>
						</pre>
					</div>
				</motion.div>
			</div>

			{/* Call to Action */}
			<div className="bg-gray-800 mt-20">
				<div className="container mx-auto px-4 py-16 text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Ready to add smooth animations to your app?
						</h2>
						<p className="text-gray-300 mb-8">
							Explore our collection of ready-to-use animated components.
						</p>
						<a
							href="/getting-started"
							className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
						>
							Get Started
						</a>
					</motion.div>
				</div>
			</div>
		</div>
		</MainLayout>
	);
};

const features = [
	{
		icon: "🚀",
		title: "Zero Dependencies",
		description:
			"Built using only React Natives core Animated API. No external animation libraries needed.",
	},
	{
		icon: "📋",
		title: "Copy & Paste",
		description:
			"Ready-to-use code snippets that you can directly integrate into your projects.",
	},
	{
		icon: "⚡",
		title: "Performance First",
		description:
			"Optimized animations that run on the native thread for smooth performance.",
	},
];
