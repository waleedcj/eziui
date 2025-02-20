import { FunctionComponent } from "@/common/types";
import { ContentLayout, StepGuide, StepSection } from "@/components/layout";
import { CommandBlock } from "@/features";

export const InstallExpo = (): FunctionComponent => {
  return (
    <ContentLayout
      title="Create Expo App"
      description="A command-line tool to create a new Expo and React Native project. This tool simplifies the initialization process by providing various templates to get started quickly without the need for manual configuration."
      tags={["expo", "react-native", "cli"]}
    >
      <div className="space-y-8">
        {/* Initial Setup */}
        <StepGuide>
          <StepSection title="Create a new project">
            <p className="text-gray-500 mb-4">Choose your preferred package manager:</p>
            <div className="space-y-4">
              <CommandBlock commands="npx create-expo-app" />
              <CommandBlock commands="yarn create expo-app" />
              <CommandBlock commands="pnpm create expo-app" />
              <CommandBlock commands="bunx create-expo-app" />
            </div>
          </StepSection>

          <StepSection title="Project Configuration">
            <p className="text-gray-500 mb-4">You'll be prompted to name your project:</p>
            <CommandBlock commands="What is your app named? > my-app" />
            <p className="text-gray-500 mt-4">
              The default template will be used, which comes pre-configured with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-500 ml-4 mt-2">
              <li>Expo CLI for development</li>
              <li>Expo Router for navigation</li>
              <li>TypeScript configuration</li>
              <li>Essential dependencies for React Native development</li>
            </ul>
          </StepSection>
        </StepGuide>

        {/* Package Manager Configurations */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Package Manager Configurations</h2>
          
          <div className="grid gap-6">
            <div>
              <h3 className="font-semibold mb-2">Yarn 2+ Configuration</h3>
              <p className="text-gray-500 mb-2">Add to .yarnrc.yml:</p>
              <CommandBlock commands="nodeLinker: node-modules" />
            </div>

            <div>
              <h3 className="font-semibold mb-2">pnpm Configuration</h3>
              <p className="text-gray-500 mb-2">Add to .npmrc:</p>
              <CommandBlock commands="node-linker=hoisted" />
            </div>

            <div>
              <h3 className="font-semibold mb-2">Yarn Modern EAS Configuration</h3>
              <p className="text-gray-500 mb-2">Add to package.json:</p>
              <CommandBlock 
                commands={[
                  "{",
                  '  "scripts": {',
                  '    "eas-build-pre-install": "corepack enable && yarn set version 4"',
                  "  }",
                  "}"
                ]} 
              />
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};