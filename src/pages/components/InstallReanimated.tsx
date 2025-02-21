import React from "react";
import { FunctionComponent } from "@/common/types";
import { ContentLayout, StepGuide, StepSection } from "@/components/layout";
import { CommandBlock } from "@/features";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";

export const InstallReanimated = (): FunctionComponent => {
	const [activeTab, setActiveTab] = React.useState<
		"npx" | "yarn"
	>("npx");

	return (
        <ContentLayout
        title="Install React Native Reanimated"
        description="React Native Reanimated comes pre-installed with Expo SDK 52+. For older versions or custom projects, follow the installation guide below."
        link="https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started"
        linkName="Reanimated Docs"
        tags={["expo", "react-native", "reanimated"]}
    >	
			<Tabs
				value={activeTab}
				onValueChange={(v: any) =>
					setActiveTab(v as "npx" | "yarn")
				}
			>
				<TabsList className="h-12 w-full justify-start rounded-none border-b-0 bg-transparent p-0">
					<TabsTrigger
						value="npx"
						className="relative w-[100px] rounded-lg items-center border-b-2 border-b-transparent bg-transparent px-4 py-2 font-medium text-gray-500 shadow-none transition-none data-[state=active]:bg-gray-200 data-[state=active]:text-gray-900"
					>
						npm
					</TabsTrigger>

					<TabsTrigger
						value="yarn"
						className="relative w-[100px] rounded-lg items-center border-b-2 border-b-transparent bg-transparent px-4 py-2 font-medium text-gray-500 shadow-none transition-none data-[state=active]:bg-gray-200 data-[state=active]:text-gray-900"
					>
						yarn
					</TabsTrigger>
				</TabsList>
				<div className="space-y-8">
					<TabsContent value="npx" className="mt-0">
						<StepGuide>
							<StepSection title="Install Reanimated">
								<div className="space-y-4">
									<CommandBlock commands="npx expo install react-native-reanimated" />
								</div>
							</StepSection>

							<StepSection title="Configure babel.config.js (if not using default Expo config)">
								<div className="space-y-2">
									<p className="text-gray-700">Only add this if you're customizing the babel configuration:</p>
									<CommandBlock
										commands={[
											"module.exports = {",
											"  presets: [",
											"    ... // your existing presets",
											"  ],",
											"  plugins: [",
											"    ... // your existing plugins",
											"    'react-native-reanimated/plugin',",
											"  ],",
											"};"
										]}
									/>
								</div>
							</StepSection>

							<StepSection title="Clear Metro bundler cache">
								<CommandBlock commands="npx expo start -c" />
							</StepSection>
						</StepGuide>
					</TabsContent>

					<TabsContent value="yarn" className="mt-0">
						<StepGuide>
							<StepSection title="Install Reanimated">
								<div className="space-y-4">
									<CommandBlock commands="yarn add react-native-reanimated" />
								</div>
							</StepSection>

							<StepSection title="Configure babel.config.js (if not using default Expo config)">
								<div className="space-y-2">
									<p className="text-gray-700">Only add this if you're customizing the babel configuration:</p>
									<CommandBlock
										commands={[
											"module.exports = {",
											"  presets: [",
											"    ... // your existing presets",
											"  ],",
											"  plugins: [",
											"    ... // your existing plugins",
											"    'react-native-reanimated/plugin',",
											"  ],",
											"};"
										]}
									/>
								</div>
							</StepSection>

							<StepSection title="Clear Metro bundler cache">
								<CommandBlock commands="yarn expo start -c" />
							</StepSection>
						</StepGuide>
					</TabsContent>
				</div>
			</Tabs>
		</ContentLayout>
	);
};
