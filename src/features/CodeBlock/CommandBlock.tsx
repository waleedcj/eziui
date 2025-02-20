import { cn } from "@/utils";
import { MyIcons } from "@/assets/images/svg/icons";
import * as React from "react";
import type { CommandBlockProps } from "./codeBlock.types";

export const CommandBlock = ({ commands, className }: CommandBlockProps) => {
  const [hasCopied, setHasCopied] = React.useState(false);

  const commandText = Array.isArray(commands) ? commands.join('\n') : commands;

  const copyToClipboard = React.useCallback(async () => {
    await navigator.clipboard.writeText(commandText);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  }, [commandText]);

  return (
    <div className={cn("relative rounded-lg bg-code-block p-4", className)}>
      {/* Copy Button */}
      <button
        className="absolute right-3 top-3 h-8 w-8 text-zinc-400 hover:text-zinc-100 transition-colors"
        onClick={copyToClipboard}
      >
        {hasCopied ? (
          <MyIcons.CheckIcon className="h-4 w-4" />
        ) : (
          <MyIcons.ClipboardIcon className="h-4 w-4" />
        )}
      </button>

      {/* Command Text */}
      <code className="text-sm text-zinc-300 whitespace-pre-wrap pr-10">
        {commandText}
      </code>
    </div>
  );
};