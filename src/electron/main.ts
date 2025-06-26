import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { isDev } from "./utils.js";
import { createTray } from "./tray.js";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    width: 1600,
    height: 900,
    frame: false,
    resizable: true,
    autoHideMenuBar: true,
    icon: path.join(app.getAppPath(), "/luminescence_icon.png"),
    webPreferences: {
      preload: path.join(app.getAppPath(), "dist-electron/preload.cjs"),
    },
    transparent: true,
  });
  if (isDev()) {
    mainWindow.loadURL("http://localhost:8080");
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
  }

  ipcMain.on("minimize", () => {
    mainWindow.minimize();
  });

  ipcMain.on("close", () => {
    mainWindow.close();
  });

  ipcMain.on("toggleFullScreen", () => {
    if (mainWindow) {
      mainWindow.setFullScreen(!mainWindow.isFullScreen());
    }
  });

  createTray(mainWindow);
  handleCloseEvents(mainWindow);
});

function handleCloseEvents(mainWindow: BrowserWindow) {
  let willClose = false;

  mainWindow.on("close", (e) => {
    if (willClose) {
      return;
    }
    e.preventDefault();
    mainWindow.hide();
    if (app.dock) {
      app.dock.hide();
    }
  });

  app.on("before-quit", () => {
    willClose = true;
  });

  mainWindow.on("show", () => {
    willClose = false;
  });
}
