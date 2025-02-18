import * as React from "react";
import { IconCheck, IconClipboard } from "@tabler/icons-react";
import { cn } from "@/utils/index";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { SimpleCodeBlockProps } from "./codeBlock.types";

export function SimpleCodeBlock({
  code,
  language,
  fileName,
  expandButtonTitle = "View Code",
  className,
}: SimpleCodeBlockProps) {
  const [isOpened, setIsOpened] = React.useState(false);
  const [hasCopied, setHasCopied] = React.useState(false);

  const copyToClipboard = React.useCallback(async () => {
    await navigator.clipboard.writeText(code);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  }, [code]);

  return (
    <Collapsible open={isOpened} onOpenChange={setIsOpened}>
      <div className={cn("relative overflow-hidden rounded-lg border", className)}>
        <div className="flex items-center justify-between border-b border-zinc-700 bg-zinc-900 px-4">
          <div className="h-12 flex items-center">
            <span className="text-zinc-400 font-semibold">{fileName || language}</span>
          </div>
          <button
            className="h-8 w-8 text-zinc-400 hover:text-zinc-100"
            onClick={copyToClipboard}
          >
            {hasCopied ? <IconCheck className="h-4 w-4" /> : <IconClipboard className="h-4 w-4" />}
          </button>
        </div>

        <CollapsibleContent
          forceMount
          className={cn("overflow-hidden", !isOpened && "max-h-32")}
        >
          <div
            className={cn(
              "[&_pre]:my-0 [&_pre]:max-h-[650px] [&_pre]:pb-[100px]",
              !isOpened ? "[&_pre]:overflow-hidden" : "[&_pre]:overflow-auto"
            )}
          >
            <div className="relative">
              <pre className="overflow-x-auto p-4">
                <code className={`language-${language}`}>
                  {code}
                </code>
              </pre>
            </div>
          </div>
        </CollapsibleContent>

        <div
          className={cn(
            "absolute flex items-center justify-center bg-gradient-to-b from-zinc-700/30 to-zinc-950/90 p-2",
            isOpened ? "inset-x-0 bottom-0 h-12" : "inset-0"
          )}
        >
          <CollapsibleTrigger asChild>
            <button className="h-8 text-xs">
              {isOpened ? "Collapse" : expandButtonTitle}
            </button>
          </CollapsibleTrigger>
        </div>
      </div>
    </Collapsible>
  );
}