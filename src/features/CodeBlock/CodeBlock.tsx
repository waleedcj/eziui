import * as React from "react";
import { MyIcons } from "@/assets/images/svg/icons";
import { cn } from "@/utils/index";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlockProps } from "./codeBlock.types";
import PreviewQR from "../CodePreview/CodePreview";
import { CodeHighlighter } from "../CodeHighlighter";

export function CodeBlocks({
	code,
	language,
	fileName = "Code",
	qrCodeUrl,
	className,
}: CodeBlockProps) {
	const [activeTab, setActiveTab] = React.useState<"code" | "preview">("code");
	const [hasCopied, setHasCopied] = React.useState(false);

	const copyToClipboard = React.useCallback(async () => {
		await navigator.clipboard.writeText(code);
		console.log("first step")
		setHasCopied(true);
		console.log("second step step")
		// setTimeout(() => setHasCopied(false), 2000);
	}, [code]);

	// }, [code, language]);

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
							<MyIcons.SourceCodeIcon className="mr-2 h-4 w-4" />
							{fileName || language}
						</TabsTrigger>
						{qrCodeUrl && (
							<TabsTrigger
								value="preview"
								className="relative w-[150px] rounded-xl items-center border-b-2 border-b-transparent bg-transparent px-8  py-2 font-medium text-gray-500 shadow-none transition-none data-[state=active]:bg-gray-200 data-[state=active]:text-gray-900"
							>
								<MyIcons.ScreenShareIcon className="mr-2 h-4 w-4" />
								Preview
							</TabsTrigger>
						)}
					</TabsList>
					<button
						className="h-8 w-8  text-gray-500  hover:text-gray-900"
						onClick={() => copyToClipboard()}
					>
						{hasCopied ? (
							<MyIcons.CheckIcon className="h-4 w-4" />
						) : (
							<MyIcons.ClipboardIcon className="h-4 w-4" />
						)}
					</button>
				</div>

				<div className="overflow-hidden">
					<TabsContent value="code" className="mt-0">
						<div
							className={cn(
								"relative",
								"[&_pre]:my-0 [&_pre]:max-h-[650px] [&_pre]:pb-[100px] [&_pre]:overflow-auto  bg-code-block rounded-lg"
							)}
						>
							<CodeHighlighter code={code} language={language} blockRadius={16} />
						</div>
					</TabsContent>

					{qrCodeUrl && (
						<TabsContent value="preview" className="mt-0">
							<div className="flex min-h-[650px] items-center rounded-lg  bg-code-block  justify-center">
								<PreviewQR previewUrl={qrCodeUrl} />
							</div>
						</TabsContent>
					)}
				</div>
			</Tabs>
		</div>
	);
}
