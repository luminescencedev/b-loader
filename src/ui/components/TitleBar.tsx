import MenuBar from "./MenuBar";
import { cn } from "../utils/cn";
const drag = { WebkitAppRegion: "drag" } as React.CSSProperties;
const noDrag = { WebkitAppRegion: "no-drag" } as React.CSSProperties;

const TitleBar: React.FC = () => {
  return (
    <div
      className={cn(
        "h-8 w-screen flex items-center justify-between text-zinc-00"
      )}
      style={drag}
    >
      <div className="flex items-center" style={{ height: "100%" }}>
        <img
          src="/luminescence_icon.png"
          alt=""
          className={cn("h-5 w-auto max-h-full mx-3")}
          style={{ maxHeight: "h-6", objectFit: "contain" }}
        />
        <MenuBar />
      </div>
      <div className="flex items-center pl-3 space-x-2 mr-4">
        <div className={cn("flex space-x-2")} style={noDrag}>
          <button
            onClick={() => window.electron.ipcRenderer.send("minimize")}
            className={cn(
              "w-3 h-3 bg-yellow-500 rounded-full flex items-center justify-center hover:brightness-90 transition-all"
            )}
            aria-label="Minimize"
          ></button>
          <button
            onClick={() => window.electron.ipcRenderer.send("maximize")}
            className={cn(
              "w-3 h-3 bg-green-500 rounded-full flex items-center justify-center hover:brightness-90 transition-all"
            )}
            aria-label="Maximize"
          ></button>
          <button
            onClick={() => window.electron.ipcRenderer.send("close")}
            className={cn(
              "w-3 h-3 bg-red-500 rounded-full flex items-center justify-center hover:brightness-90 transition-all"
            )}
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
