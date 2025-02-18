import { FunctionComponent } from "@/common/types";
import { CodeBlocks } from "@/features/CodeBlock";
// import React from 'react'

export const Instalation = (): FunctionComponent => {
	return (
		<CodeBlocks
			code={component.code}
			language={"tsx"}
			qrCodeUrl="exp://pijjwlwtpprjdwx.boltexpo.dev"
		/>
	);
};

const component = {
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
};
