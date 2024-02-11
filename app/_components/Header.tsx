import { FileJson2 } from "lucide-react";

const Header = () => (
  <h1 className="text-2xl font-bold flex gap-3">
    <span className="px-2 pt-1 border-t-4 dark:pt-0 dark:border-t-0 dark:border-b-4 transition-all">
      JSON
    </span>
    <span className="px-2 pt-0 border-b-4 dark:pt-1 dark:border-b-0 dark:border-t-4 transition-all">
      TAMER
    </span>
    <FileJson2 className="size-10" />
  </h1>
);

export default Header;
