import { useEffect, useRef, useState } from "react";

export default function useMeasure() {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      // Get the width from the first observed entry
      if (entries && entries.length > 0) {
        setWidth(entries[0].contentRect.width);
        setHeight(entries[0].contentRect.height);
      }
    });

    // Start observing the element when the component mounts
    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  return { ref, width, height };
}
