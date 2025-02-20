import { cn } from "@/utils";
import { ContentLayoutProps } from "./ContentLayout.types"

export const ContentLayout = ({
  title,
  description,
  tags,
  children,
  className,
}: ContentLayoutProps) => {
  return (
    <div className={cn("space-y-6 py-6", className)}>
      {/* Header Section */}
      <div className="space-y-4">
      {/* <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 font-jakarta"> */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 font-jakartat">{title}</h1>
        {description && (
          <p className="text-lg text-gray-500">
            {description}
          </p>
        )}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 items-center rounded-lg text-xs font-medium bg-gray-100 text-gray-500 "
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="py-1">
        {children}
      </div>
    </div>
  );
};