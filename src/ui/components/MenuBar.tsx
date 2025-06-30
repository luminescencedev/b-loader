import { cn } from "../utils/cn";

const menus = ["File", "Edit", "View", "Window", "Help"];

const MenuBar: React.FC = () => {
  // const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className={cn("flex space-x-4 text-xs font-medium select-none")}>
      {menus.map((menu) => (
        <button
          key={menu}
          className={cn("hover:underline focus:outline-none")}
          tabIndex={-1}
        >
          {menu}
        </button>
      ))}
    </nav>
  );
};

export default MenuBar;
