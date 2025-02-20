import { FunctionComponent } from "@/common/types";
import { MyIcons } from "@/assets/images/svg/icons";

export const SearchBar = (): FunctionComponent => {
  return (
    <div className="relative flex items-center">
      <div className="absolute left-3 text-gray-400">
        <MyIcons.SearchIcon className="w-4/5 h-4/5" />
      </div>
      <input
        type="text"
        placeholder="Search components"
        className="w-[240px] rounded-lg bg-gray-100 py-1.5 pl-10 pr-4 text-sm text-gray-600 placeholder-gray-400 outline-none ring-1 ring-gray-200 transition-all focus:ring-gray-400 shadow-sm"
      />
      <div className="absolute right-3 text-xs text-gray-400">
        <span className="border border-gray-200 rounded px-1">⌘K</span>
      </div>
    </div>
  );
};
