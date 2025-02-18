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
		setHasCopied(true);
		setTimeout(() => setHasCopied(false), 2000);
	}, [code]);

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
							<div className="relative">
								<pre className="overflow-x-auto p-4">
									<code className={`language-${language} text-zinc-100`}>{code}</code>
								</pre>
							</div>
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
