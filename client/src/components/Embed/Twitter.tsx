

import { useEffect } from "react";

declare global {
  interface Window {
    twttr: any;
  }
}

interface TwitterProps {
  link: string;
}

export function Twitter({ link }: TwitterProps) {
  useEffect(() => {
    if (window.twttr) {
      window.twttr.widgets.load();
    }
  }, [link]);

  return (
    <blockquote className="twitter-tweet">
      <a href={link}></a>
    </blockquote>
  );
}

