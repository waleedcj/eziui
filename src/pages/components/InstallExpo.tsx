import React from "react";
import { FunctionComponent } from "@/common/types";
import { ContentLayout, StepGuide, StepSection } from "@/components/layout";
import { CommandBlock } from "@/features";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";

export const InstallExpo = (): FunctionComponent => {
	const [activeTab, setActiveTab] = React.useState<"npx" | "yarn">("npx");

	return (
		<ContentLayout
			title="Create Expo App"
			description="Initialize your Expo app using popular package managers. A template with TypeScript and file navigation will be installed. Visit the official docs to customize further."
			link="https://docs.expo.dev/more/create-expo/"
			linkName="Expo Docs"
			tags={["expo", "react-native", "cli"]}
		>
			<Tabs
				value={activeTab}
				onValueChange={(v: any) => setActiveTab(v as "npx" | "yarn")}
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

					{/* <TabsTrigger
						value="pnpm"
						className="relative w-[100px] rounded-lg items-center border-b-2 border-b-transparent bg-transparent px-4 py-2 font-medium text-gray-500 shadow-none transition-none data-[state=active]:bg-gray-200 data-[state=active]:text-gray-900"
					>
						pnpm
					</TabsTrigger>

					<TabsTrigger
						value="bunx"
						className="relative w-[100px] rounded-lg items-center border-b-2 border-b-transparent bg-transparent px-4 py-2 font-medium text-gray-500 shadow-none transition-none data-[state=active]:bg-gray-200 data-[state=active]:text-gray-900"
					>
						bunx
					</TabsTrigger> */}
				</TabsList>
				<div className="space-y-8">
					{/* Initial Setup */}
					<TabsContent value="npx" className="mt-0">
						<StepGuide>
							<StepSection title="Create a new project">
								<div className="space-y-4">
									<CommandBlock commands="npx create-expo-app@latest" />
								</div>
							</StepSection>

							<StepSection title="You'll be prompted to name your project">
								<CommandBlock commands="What is your app named? > my-app" />
							</StepSection>
							<StepSection title="Start your app">
								<CommandBlock commands={["cd my-app", "npx expo start"]} />
							</StepSection>
						</StepGuide>
					</TabsContent>

					<TabsContent value="yarn" className="mt-0">
						<StepGuide>
							<StepSection title="Create a new project">
								<div className="space-y-4">
									<CommandBlock commands="yarn create expo-app" />
								</div>
							</StepSection>

							<StepSection title="You'll be prompted to name your project">
								<CommandBlock commands="What is your app named? > my-app" />
							</StepSection>
							<StepSection title="Follow these steps if you are uisng yarn 2+">
								<div>
									<p className="text-gray-500 mb-2">Add to .yarnrc.yml:</p>
									<CommandBlock commands="nodeLinker: node-modules" />
								</div>

								<div>
									<p className="text-gray-500 my-2">Add to package.json:</p>
									<CommandBlock
										commands={[
											"{",
											'  "scripts": {',
											'    "eas-build-pre-install": "corepack enable && yarn set version 4"',
											"  }",
											"}",
										]}
									/>
								</div>
							</StepSection>
							<StepSection title="Start your app">
								<CommandBlock commands={["cd my-app", "yarn start"]} />
							</StepSection>
						</StepGuide>
					</TabsContent>
				</div>
			</Tabs>
		</ContentLayout>
	);
};
