import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  minimize: () => ipcRenderer.send("minimize"),
  toggleFullScreen: () => ipcRenderer.send("toggleFullScreen"),
  close: () => ipcRenderer.send("close"),
});
