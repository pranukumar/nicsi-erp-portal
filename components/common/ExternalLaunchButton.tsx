"use client";

import type { ReactNode } from "react";

type ExternalLaunchButtonProps = {
  url: string;
  className?: string;
  children: ReactNode;
  title?: string;
};

export default function ExternalLaunchButton({
  url,
  className,
  children,
  title,
}: ExternalLaunchButtonProps) {
  const handleClick = () => {
    if (typeof window === "undefined") return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button type="button" onClick={handleClick} className={className} title={title ?? "Open external website"}>
      {children}
    </button>
  );
}

