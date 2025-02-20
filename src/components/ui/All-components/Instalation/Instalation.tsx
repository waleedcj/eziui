import { FunctionComponent } from "@/common/types";
import { CodeBlocks } from "@/features/CodeBlock";
// import React from 'react'

export const Instalation = (): FunctionComponent => {
	return (
		<CodeBlocks
			code={component.code}
			language={"jsx"}
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
	code: `
	import { useState, useEffect } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import  oneDark  from 'react-syntax-highlighter/dist/esm/styles/prism/one-dark';

// Register only the languages we need
SyntaxHighlighter.registerLanguage('tsx', tsx);

type CodeHighlighterProps = {
  code: string;
  language: string;
};

export const CodeHighlighter = ({ code, language }: CodeHighlighterProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle server-side rendering
  if (!isClient) {
    return <pre>{code}</pre>;
  }

  return (
    <SyntaxHighlighter
      language={language}
      style={oneDark}
      customStyle={{
        margin: 0,
        padding: '16px',
        // backgroundColor: 'transparent',
      }}
      showLineNumbers={true}
      wrapLines={true}
    >
      {code}
    </SyntaxHighlighter>
  );
};

	import * as React from "react";
import {
	IconCheck,
	IconClipboard,
	IconSourceCode,
	IconScreenShare,
} from "@tabler/icons-react";
import { cn } from "@/utils/index";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlockProps } from "./codeBlock.types";
import PreviewQR from "../CodePreview/CodePreview";
import { codeToHtml } from "shiki";


export function CodeBlocks({
	code,
	language,
	fileName = "Code",
	qrCodeUrl,
	className,
}: CodeBlockProps) {
	const [activeTab, setActiveTab] = React.useState<"code" | "preview">("code");
	const [hasCopied, setHasCopied] = React.useState(false);
	const [highlightedCode, setHighlightedCode] = React.useState<string>("");
	const [isLoading, setIsLoading] = React.useState(true);

	const copyToClipboard = React.useCallback(async () => {
		await navigator.clipboard.writeText(code);
		setHasCopied(true);
		setTimeout(() => setHasCopied(false), 2000);
	}, [code]);

	React.useEffect(() => {
		const highlight = async () => {
		  try {
			setIsLoading(true);
			setTimeout(async () => {
				const html = await codeToHtml(code, {
					lang: language,
					theme: "night-owl",
				});
				setHighlightedCode(html);
			}, 10000);
			// const html = await codeToHtml(code, {
			//   lang: language,
			//   theme: "night-owl",
			// });
			
		  } catch (error) {
			console.error("Failed to highlight code:", error);
		  } finally {
			setIsLoading(false);
		  }
		};
	
		highlight();
	  }, [code, language]);
	
	  const renderCodeContent = () => {
		if (isLoading) {
		  return (
			<div className="animate-pulse space-y-2 p-4">
			  {[...Array(6)].map((_, i) => (
				<div
				  key={i}
				  className="h-4 bg-gray-100/50 rounded"
				/>
			  ))}
			</div>
		  );
		}
	
		return (
		  <div
			className="shiki-syntax-highlighter"
			dangerouslySetInnerHTML={{ __html: highlightedCode }}
		  />
		);
	  };

	return (
		<div className={cn("relative overflow-hidden rounded-lg", className)}>
			<Tabs
				value={activeTab}
				onValueChange={(v: any) => setActiveTab(v as "code" | "preview")}
			>
				<div className="flex items-center justify-between mb-4">
					<TabsList className="h-12 w-full justify-start rounded-none border-b-0 bg-transparent p-0">
						<TabsTrigger
							value="code"
							className="relative w-[150px] rounded-lg items-center border-b-2 border-b-transparent bg-transparent px-8 py-2 font-medium text-gray-500 shadow-none transition-none data-[state=active]:bg-gray-200 data-[state=active]:text-gray-900"
						>
							<IconSourceCode className="mr-2 h-4 w-4" />
							{fileName || language}
						</TabsTrigger>
						{qrCodeUrl && (
							<TabsTrigger
								value="preview"
								className="relative w-[150px] rounded-xl items-center border-b-2 border-b-transparent bg-transparent px-8  py-2 font-medium text-gray-500 shadow-none transition-none data-[state=active]:bg-gray-200 data-[state=active]:text-gray-900"
							>
								<IconScreenShare className="mr-2 h-4 w-4" />
								Preview
							</TabsTrigger>
						)}
					</TabsList>
					<button
						className="h-8 w-8  text-gray-500  hover:text-gray-900"
						onClick={copyToClipboard}
					>
						{hasCopied ? (
							<IconCheck className="h-4 w-4" />
						) : (
							<IconClipboard className="h-4 w-4" />
						)}
					</button>
				</div>

				<div className="overflow-hidden">
					<TabsContent value="code" className="mt-0">
						<div className="[&_pre]:my-0 [&_pre]:max-h-[650px] [&_pre]:overflow-auto rounded-lg bg-[#011627]">
							{renderCodeContent()}
						</div>
					</TabsContent>

					{qrCodeUrl && (
						<TabsContent value="preview" className="mt-0">
							<div className="flex min-h-[650px] items-center rounded-lg bg-[#011627] justify-center">
								<PreviewQR previewUrl={qrCodeUrl} />
							</div>
						</TabsContent>
					)}
				</div>
			</Tabs>
		</div>
	);
}
`,
};
