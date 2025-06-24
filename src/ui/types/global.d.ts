declare global {
  interface Window {
    electronAPI: {
      minimize: () => void;
      toggleFullScreen: () => Promise<void>;
      close: () => void;
    };
  }
}

export {};
