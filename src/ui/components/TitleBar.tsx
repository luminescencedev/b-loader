import { IoClose, IoScan, IoRemove } from "react-icons/io5";

export default function TitleBar() {
  return (
    <div className="h-10 bg-black text-white flex justify-end items-center select-none shadow-md">
      <div className="flex">
        <button
          onClick={() => window.electronAPI.minimize()}
          className="hover:bg-zinc-800 w-10 h-10 flex items-center justify-center transition-all"
          aria-label="Minimize"
        >
          <IoRemove />
        </button>
        <button
          onClick={() => window.electronAPI.toggleFullScreen()}
          className="hover:bg-zinc-800 w-10 h-10 flex items-center justify-center transition-all"
          aria-label="Toggle Fullscreen"
        >
          <IoScan />
        </button>
        <button
          onClick={() => window.electronAPI.close()}
          className="hover:bg-white hover:text-black w-10 h-10 flex items-center justify-center transition-all"
          aria-label="Close"
        >
          <IoClose />
        </button>
      </div>
    </div>
  );
}
