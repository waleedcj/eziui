import type { FunctionComponent } from "@/common/types";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/SideBar/SideBar";
import { Outlet } from "@tanstack/react-router";
import { links } from "@/data";

export const Components = (): FunctionComponent => {
	// const [activeCategory, setActiveCategory] = useState("all");
	// const [searchQuery, setSearchQuery] = useState("");

	// const filteredComponents = components.filter(
	// 	(component) =>
	// 		(activeCategory === "all" || component.category === activeCategory) &&
	// 		component.title.toLowerCase().includes(searchQuery.toLowerCase())
	// );

	// const links = [
	// 	{
	// 		label: "All Components",
	// 		href: "/components/all-components",
	// 	},
	// 	{
	// 		label: "Animated Button",
	// 		href: "/components/animated-button",
	// 	},
	// ];


	return (
		<div className="flex-1 flex container mx-auto py-20">
          <aside className="hidden md:block w-[240px] h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
            <Sidebar>
              <SidebarBody>
                <div className="flex flex-col gap-1 p-4">
                  {links.map((link, idx) => (
                    <SidebarLink key={idx} link={link} />
                  ))}
                </div>
              </SidebarBody>
            </Sidebar>
          </aside>
          
          <main className="flex-1 overflow-y-auto p-6">
            <Outlet />
          </main>
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

// const components = [
// 	{
// 		id: 1,
// 		title: "Fade In Animation",
// 		category: "basic",
// 		description: "A simple fade-in animation using Animated.timing",
// 		tags: ["opacity", "timing", "basic"],
// 		code: `import { Animated, useRef, useEffect } from 'react-native';

// const FadeInView = ({ children }) => {
//   const fadeAnim = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 1000,
//       useNativeDriver: true,
//     }).start();
//   }, []);

//   return (
//     <Animated.View style={{ opacity: fadeAnim }}>
//       {children}
//     </Animated.View>
//   );
// };`,
// 	},
// 	{
// 		id: 2,
// 		title: "Slide In Animation",
// 		category: "transition",
// 		description: "Slide in from the left with a smooth easing",
// 		tags: ["transform", "timing", "transition"],
// 		code: `import { Animated, useRef, useEffect } from 'react-native';

// const SlideInView = ({ children }) => {
//   const slideAnim = useRef(new Animated.Value(-100)).current;

//   useEffect(() => {
//     Animated.spring(slideAnim, {
//       toValue: 0,
//       tension: 20,
//       friction: 7,
//       useNativeDriver: true,
//     }).start();
//   }, []);

//   return (
//     <Animated.View style={{ 
//       transform: [{ translateX: slideAnim }] 
//     }}>
//       {children}
//     </Animated.View>
//   );
// };`,
// 	},
// 	{
// 		id: 3,
// 		title: "Gesture Card",
// 		category: "gesture",
// 		description: "A card that responds to pan gestures",
// 		tags: ["gesture", "pan responder", "advanced"],
// 		code: `import { Animated, PanResponder } from 'react-native';

// const GestureCard = () => {
//   const pan = useRef(new Animated.ValueXY()).current;

//   const panResponder = PanResponder.create({
//     onStartShouldSetPanResponder: () => true,
//     onPanResponderMove: Animated.event(
//       [null, { dx: pan.x, dy: pan.y }],
//       { useNativeDriver: false }
//     ),
//     onPanResponderRelease: () => {
//       Animated.spring(pan, {
//         toValue: { x: 0, y: 0 },
//         useNativeDriver: false,
//       }).start();
//     },
//   });

//   return (
//     <Animated.View
//       {...panResponder.panHandlers}
//       style={{
//         transform: [
//           { translateX: pan.x },
//           { translateY: pan.y }
//         ]
//       }}
//     />
//   );
// };`,
// 	},
// ];
