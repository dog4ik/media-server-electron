declare global {
  const MAIN_WINDOW_VITE_DEV_SERVER_URL: string | undefined;
  const MAIN_WINDOW_VITE_NAME: string | undefined;
  interface Window {
    electron: {
      loadUrl: (url: string) => void;
    };
  }
}

export {};
