// import React from "react";
// import { codeToHtml } from "shiki";
// import { IconCheck, IconCopy } from "@tabler/icons-react";
// import { CodeBlockProps } from "./CodeBlock.types";

// export const CodeBlock = ({
//   language,
//   filename,
//   code,
//   tabs = [],
// }: CodeBlockProps) => {
//   const [copied, setCopied] = React.useState(false);
//   const [activeTab, setActiveTab] = React.useState(0);
//   const [highlightedCode, setHighlightedCode] = React.useState<string>("");
//   const [isLoading, setIsLoading] = React.useState(true);

//   const tabsExist = tabs.length > 0;

//   const copyToClipboard = async () => {
//     const textToCopy = tabsExist ? tabs[activeTab]?.code ?? '' : code;
//     if (textToCopy) {
//       await navigator.clipboard.writeText(textToCopy);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     }
//   };

//   // const activeCode = tabsExist ? tabs[activeTab]?.code : code;
//   // const activeLanguage = tabsExist
//   //   ? tabs[activeTab]?.language || language
//   //   : language;
//   // const activeHighlightLines = tabsExist
//   //   ? tabs[activeTab]?.highlightLines || []
//   //   : highlightLines;

//   // React.useEffect(() => {
//     const highlight = async () => {
//       const html = await codeToHtml(code, {
//         lang: language,
//         theme: "night-owl",
//       });
//       setHighlightedCode(html);
//     };

//     highlight();
//   // }, [activeCode, activeLanguage]);

//   return (
//     <div className="relative w-full rounded-lg bg-[#011627] p-4 font-mono text-sm">
//       <div className="flex flex-col gap-2">
//         {tabsExist && (
//           <div className="flex overflow-x-auto">
//             {tabs.map((tab, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveTab(index)}
//                 className={`px-3 !py-2 text-xs transition-colors font-sans ${
//                   activeTab === index
//                     ? "text-white"
//                     : "text-zinc-400 hover:text-zinc-200"
//                 }`}
//               >
//                 {tab.name}
//               </button>
//             ))}
//           </div>
//         )}
//         {!tabsExist && filename && (
//           <div className="flex justify-between items-center py-2">
//             <div className="text-xs text-zinc-400">{filename}</div>
//             <button
//               onClick={copyToClipboard}
//               className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors font-sans"
//             >
//               {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
//             </button>
//           </div>
//         )}
//       </div>
//       <div
//         className="shiki-syntax-highlighter"
//         dangerouslySetInnerHTML={{ __html: highlightedCode }}
//       />
//     </div>
//   );
// };