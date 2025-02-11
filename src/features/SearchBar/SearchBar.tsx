import { FunctionComponent } from "@/common/types";
import { IconSearch } from "@tabler/icons-react";

export const SearchBar = (): FunctionComponent => {
  return (
    <div className="relative flex items-center">
      <div className="absolute left-3 text-gray-400">
        <IconSearch size={18} />
      </div>
      <input
        type="text"
        placeholder="Search components"
        className="w-[240px] rounded-lg bg-gray-900 py-1.5 pl-10 pr-4 text-sm text-gray-300 placeholder-gray-400 outline-none ring-1 ring-gray-800 transition-all focus:ring-gray-700"
      />
      <div className="absolute right-3 text-xs text-gray-400">
        <span className="border border-gray-700 rounded px-1">⌘K</span>
      </div>
    </div>
  );
};
