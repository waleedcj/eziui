// import { useState } from "react";
import type { FunctionComponent } from "@/common/types";
// import { SimpleCodeBlock } from "@/features/CodeBlock";
// import { CodeBlock } from "../code-block";
import { SimpleCodeBlock } from "@/features/CodeBlock";
import { CodeHighlighter } from "@/features/CodeHighlighter";

export const PreviewComponents = (): FunctionComponent => {
	// const [activeCategory, setActiveCategory] = useState("all");
	// const [searchQuery, setSearchQuery] = useState("");

	// const filteredComponents = components.filter(
	// 	(component) =>
	// 		(activeCategory === "all" || component.category === activeCategory) &&
	// 		component.title.toLowerCase().includes(searchQuery.toLowerCase())
	// );


	return (
		<div className="min-h-screen  text-white">
			<div className="bg-gray-800 ">
			</div>

			<div className=" mx-auto px-4 py-8">
				<div className="gap-6">
					{components.map((component) => (
						<div
							key={component.id}
							// initial={{ opacity: 0, y: 20 }}
							// animate={{ opacity: 1, y: 0 }}
							// transition={{ duration: 0.4, delay: index * 0.1 }}
							className="rounded-xl overflow-hidden"
						>
						
							{/* <div className="p-4 bg-gray-100 h-48 flex items-center justify-center">
								
								<div className="text-center text-gray-500">Live Preview</div>
							</div> */}

						
							<div className="bg-gray-100 p-4 my-8">
								<div className="flex items-center justify-between mb-2">
									<h3 className="text-xl text-neutral-900 font-semibold">{component.title}</h3>
									<span className="text-xs bg-blue-500 px-2 py-1 rounded">
										{component.category}
									</span>
								</div>
								<p className="text-gray-500 text-sm mb-4">
									{component.description}
								</p>

							
								{/* <div className="relative"> */}
							
									{/* <CodeBlock
										language="ts"
										code={component.code}
										filename={`${component.title}.tsx`}
									/> */}

									{/* <SimpleCodeBlock code={component.code} language={"tsx"}  /> */}
									<CodeHighlighter code="npx create-react-app@latest" language="tsx"  blockRadius={16} />
									{/* <SimpleCodeBlock code={component.code} language={"tsx"} fileName="animation.tsx" /> */}
								{/* </div> */}

							 
								<div className="mt-4 flex flex-wrap gap-2">
									{component.tags.map((tag) => (
										<span
											key={tag}
											className="text-xs bg-gray-300 px-2 py-1 rounded text-gray-700"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

// const categories = [
// 	{ id: "all", name: "All" },
// 	{ id: "basic", name: "Basic" },
// 	{ id: "gesture", name: "Gesture" },
// 	{ id: "transition", name: "Transition" },
// 	{ id: "complex", name: "Complex" },
// ];

const components = [
	{
		id: 1,
		title: "Fade In Animation",
		category: "basic",
		description: "A simple fade-in animation using Animated.timing",
		tags: ["opacity", "timing", "basic"],
		code: `npx create-expoapp@lasterst`,
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
