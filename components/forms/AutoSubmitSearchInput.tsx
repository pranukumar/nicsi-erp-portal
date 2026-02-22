"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  name: string;
  defaultValue?: string;
  placeholder?: string;
  debounceMs?: number;
  className?: string;
};

export default function AutoSubmitSearchInput({
  name,
  defaultValue = "",
  placeholder,
  debounceMs = 400,
  className,
}: Props) {
  const [value, setValue] = useState(defaultValue);
  const timerRef = useRef<number | null>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }

    timerRef.current = window.setTimeout(() => {
      const activeEl = document.activeElement as HTMLElement | null;
      const form = activeEl?.closest("form");
      form?.requestSubmit();
    }, debounceMs);

    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, [value, debounceMs]);

  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      placeholder={placeholder}
      className={className}
      autoComplete="off"
    />
  );
}
