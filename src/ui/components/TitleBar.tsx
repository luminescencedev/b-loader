const drag = { WebkitAppRegion: "drag" } as React.CSSProperties;
const noDrag = { WebkitAppRegion: "no-drag" } as React.CSSProperties;

import {
  VscChromeMaximize,
  VscChromeClose,
  VscChromeMinimize,
} from "react-icons/vsc";

export default function TitleBar() {
  return (
    <>
      <div
        className="h-[4vh] w-screen flex items-center justify-between bg-zinc-900/50 text-zinc-50 "
        style={drag}
      >
        <div>
          <img src="" />
        </div>
        <div className="flex ">
          <button
            className="h-[4vh] w-[5vh] flex items-center justify-center hover:bg-zinc-800"
            onClick={() => window.electronAPI.minimize()}
            aria-label="Minimize"
            style={noDrag}
          >
            <VscChromeMinimize />
          </button>
          <button
            className="h-[4vh] w-[5vh] flex items-center justify-center hover:bg-zinc-800"
            onClick={() => window.electronAPI.toggleFullScreen()}
            aria-label="Toggle FullScreen"
            style={noDrag}
          >
            <VscChromeMaximize />
          </button>
          <button
            className="h-[4vh] w-[5vh] flex items-center justify-center hover:bg-red-700"
            onClick={() => window.electronAPI.close()}
            aria-label="Close"
            style={noDrag}
          >
            <VscChromeClose />
          </button>
        </div>
      </div>
    </>
  );
}
