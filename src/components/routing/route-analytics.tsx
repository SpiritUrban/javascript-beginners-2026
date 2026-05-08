import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_MEASUREMENT_ID = "G-X2X2Q2JX0M";

export function RouteAnalytics() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== "function") {
      return;
    }

    const pagePath = `${location.pathname}${location.search}${location.hash}`;

    window.gtag("event", "page_view", {
      page_title: document.title,
      page_path: pagePath,
      page_location: window.location.href,
      send_to: GA_MEASUREMENT_ID,
    });
  }, [location]);

  return null;
}
