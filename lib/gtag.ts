declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const ADS_TAG_ID = "AW-18052182389";
export const ADS_CONVERSION_ID = "AW-18052182389/nbOBCIiHypIcEPXi-Z9D";

export const pageview = (url: string) => {
  window.gtag("config", ADS_TAG_ID, {
    page_path: url,
  });
};

// Event snippet for Submit lead forms conversion page In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button.
export const trackConversion = (url?: string) => {
  const callback = () => {
    if (url) window.location.href = url;
  };

  window.gtag("event", "conversion", {
    send_to: ADS_CONVERSION_ID,
    value: 1.0,
    currency: "INR",
    event_callback: callback,
  });
};