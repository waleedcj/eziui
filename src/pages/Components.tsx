import { useState } from "react";
import { motion } from "framer-motion";
// import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
// import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import type { FunctionComponent } from "@/common/types";
import { CodeBlock } from "@/components/ui/code-block";
import { MainLayout } from "@/components/layout/MainLayout";

export const Components = (): FunctionComponent => {
	const [activeCategory, setActiveCategory] = useState("all");
	const [searchQuery, setSearchQuery] = useState("");

	const filteredComponents = components.filter(
		(component) =>
			(activeCategory === "all" || component.category === activeCategory) &&
			component.title.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
    <MainLayout>
		<div className="min-h-screen bg-gray-900 text-white">
			{/* Header */}
			<div className="bg-gray-800 border-b border-gray-700">
				<div className="container mx-auto px-4 py-6">
					<h1 className="text-3xl font-bold mb-4">Animated Components</h1>

					{/* Search and Filter */}
					<div className="flex flex-col md:flex-row gap-4">
						<input
							type="text"
							placeholder="Search components..."
							className="bg-gray-700 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
						<div className="flex gap-2">
							{categories.map((category) => (
								<button
									key={category.id}
									onClick={() => setActiveCategory(category.id)}
									className={`px-4 py-2 rounded-lg transition-colors ${
										activeCategory === category.id
											? "bg-blue-500 text-white"
											: "bg-gray-700 text-gray-300 hover:bg-gray-600"
									}`}
								>
									{category.name}
								</button>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Components Grid */}
			<div className="container mx-auto px-4 py-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredComponents.map((component, index) => (
						<motion.div
							key={component.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
							className="bg-gray-800 rounded-xl overflow-hidden"
						>
							{/* Preview */}
							<div className="p-4 bg-gray-700 h-48 flex items-center justify-center">
								{/* This is where you'd render the live preview */}
								<div className="text-center text-gray-400">Live Preview</div>
							</div>

							{/* Component Info */}
							<div className="p-4">
								<div className="flex items-center justify-between mb-2">
									<h3 className="text-xl font-semibold">{component.title}</h3>
									<span className="text-xs bg-blue-500 px-2 py-1 rounded">
										{component.category}
									</span>
								</div>
								<p className="text-gray-400 text-sm mb-4">
									{component.description}
								</p>

								{/* Code Snippet */}
								<div className="relative">
									{/* <SyntaxHighlighter 
                    language="jsx"
                    style={vscDarkPlus}
                    className="rounded-lg text-sm"
                  >
                    {component.code}
                  </SyntaxHighlighter> */}
									<CodeBlock
										language="tsx"
										code={component.code}
										filename={`${component.title}.tsx`}
									/>
									{/* <button
										onClick={() =>
											navigator.clipboard.writeText(component.code)
										}
										className="absolute top-2 right-2 bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors"
									>
										📋
									</button> */}
								</div>

								{/* Tags */}
								<div className="mt-4 flex flex-wrap gap-2">
									{component.tags.map((tag) => (
										<span
											key={tag}
											className="text-xs bg-gray-700 px-2 py-1 rounded"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
    </MainLayout>
	);
};

const categories = [
	{ id: "all", name: "All" },
	{ id: "basic", name: "Basic" },
	{ id: "gesture", name: "Gesture" },
	{ id: "transition", name: "Transition" },
	{ id: "complex", name: "Complex" },
];

const components = [
	{
		id: 1,
		title: "Fade In Animation",
		category: "basic",
		description: "A simple fade-in animation using Animated.timing",
		tags: ["opacity", "timing", "basic"],
		code: `import { Animated, useRef, useEffect } from 'react-native';

const FadeInView = ({ children }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      {children}
    </Animated.View>
  );
};`,
	},
	{
		id: 2,
		title: "Slide In Animation",
		category: "transition",
		description: "Slide in from the left with a smooth easing",
		tags: ["transform", "timing", "transition"],
		code: `import { Animated, useRef, useEffect } from 'react-native';

const SlideInView = ({ children }) => {
  const slideAnim = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    Animated.spring(slideAnim, {
      toValue: 0,
      tension: 20,
      friction: 7,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={{ 
      transform: [{ translateX: slideAnim }] 
    }}>
      {children}
    </Animated.View>
  );
};`,
	},
	{
		id: 3,
		title: "Gesture Card",
		category: "gesture",
		description: "A card that responds to pan gestures",
		tags: ["gesture", "pan responder", "advanced"],
		code: `import { Animated, PanResponder } from 'react-native';

const GestureCard = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [null, { dx: pan.x, dy: pan.y }],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: () => {
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
      }).start();
    },
  });

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={{
        transform: [
          { translateX: pan.x },
          { translateY: pan.y }
        ]
      }}
    />
  );
};`,
	},
];
