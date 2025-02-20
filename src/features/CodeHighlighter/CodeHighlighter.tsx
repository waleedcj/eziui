import { MyIcons } from "@/assets/images/svg/icons";
import { useState, useEffect, useMemo } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// Register language
SyntaxHighlighter.registerLanguage("tsx", tsx);

type CodeHighlighterProps = {
	code: string;
	language: string;
  blockRadius: number
};

export const CodeHighlighter = ({ code, language, blockRadius }: CodeHighlighterProps) => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	const memoizedHighlighter = useMemo(
		() => (
			<SyntaxHighlighter
				language={language}
				style={oneDark}
				customStyle={{
					margin: 0,
					padding: "16px",
					scrollbarWidth: "thin",
					scrollbarColor: "rgba(255, 255, 255, 0.1) transparent",
          borderRadius: blockRadius
				}}
				// showLineNumbers={true}
				wrapLines={true}
			>
				{code}
			</SyntaxHighlighter>
		),
		[code, language] // Dependencies array includes both code and language
	);

	// Handle server-side rendering
	if (!isClient) {
		return (
			<div className="flex flex-1 justify-center items-center h-[650px] ">
				<MyIcons.CircularLoading stroke="#FFFFFF" />
			</div>
		);
	}

	return memoizedHighlighter;
};
