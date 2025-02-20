import { cn } from "@/utils";
import type { StepGuideProps, StepSectionProps } from "./StepLayout.types";

export const StepGuide = ({ children, className }: StepGuideProps) => {
	return (
		<div className={cn("relative space-y-4", className)}>
			{/* Vertical connecting line */}
			<div className="absolute left-3 top-0 bottom-0 w-[1px] bg-gray-300" />
			{children}
		</div>
	);
};

export const StepSection = ({
	title,
	children,
	className,
}: StepSectionProps) => {
	return (
		<div className={cn("relative pl-10", className)}>
			{/* Circle badge with connecting line */}
            {/* <div className="absolute block left-3 rounded-tr-full rounded-br-full top-0 z-20 h-full bg-neutral-200 dark:bg-neutral-700 w-[6px]" /> */}
			<div className="absolute block left-3 top-0 h-6 w-[6px] rounded-tr-full rounded-br-full border-2 border-gray-300 bg-gray-300" />

			{/* Title section */}
			<h3 className="text-lg font-semibold text-neutral-900">
				{title}
			</h3>

			{/* Content section */}
			<div className="mb-4 mt-6 max-h-[650px] overflow-x-auto">{children}</div>
		</div>
	);
};
