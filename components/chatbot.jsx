"use client";
import { useEffect } from "react";

export default function AdgoWidget() {
  useEffect(() => {
    // Config must be set before script loads
    window.VG_CONFIG = {
      ID: "r2nzg0jisld3buo2", // YOUR AGENT ID
      region: "eu", // YOUR ACCOUNT REGION
      render: "bottom-right", // 'full-width', 'bottom-left', or 'bottom-right'
      stylesheets: [
        "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
        // Add your custom CSS files here
      ],
      // Example of enabling autostart:
      // autostart: true,
    };

    const script = document.createElement("script");
    script.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // cleanup (remove script + overlay container if needed)
      document.body.removeChild(script);
      const overlay = document.getElementById("VG_OVERLAY_CONTAINER");
      if (overlay) overlay.innerHTML = "";
    };
  }, []);

  return (
    <div
      id="VG_OVERLAY_CONTAINER"
      style={{ width: 0, height: 0 }}
    >
      {/* Widget will render here */}
    </div>
  );
}
