import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NICSI ERP Portal",
    short_name: "NICSI Portal",
    description: "National Informatics Centre Services Inc. public information and ERP portal.",
    start_url: "/",
    display: "standalone",
    background_color: "#f2f6ff",
    theme_color: "#0a2e73",
    icons: [
      {
        src: "/logos/NICSI-logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logos/NICSI-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
