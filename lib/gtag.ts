declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const GA_ID = "AW-18052182389";

export const pageview = (url: string) => {
  window.gtag("config", GA_ID, {
    page_path: url,
  });
};