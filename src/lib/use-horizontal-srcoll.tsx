import { useCallback, useEffect, useRef, useState } from "react";

const BUFFER_WIDTH = 10;

interface UseHorizontalScrollResult {
  scrollerRef: React.RefObject<HTMLDivElement | null>;
  canScrollLeft: boolean;
  canScrollRight: boolean;
  scrollBy: (dir: 1 | -1) => void;
}

export function useHorizontalScroll(): UseHorizontalScrollResult {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollerRef.current;

    if (el === null) {
      return;
    }

    const visibleWidth = el.scrollWidth - el.clientWidth;
    setCanScrollRight(el.scrollLeft <= visibleWidth - BUFFER_WIDTH);
    setCanScrollLeft(el.scrollLeft > BUFFER_WIDTH);
  }, []);

  const scrollBy = useCallback((dir: 1 | -1) => {
    const el = scrollerRef.current;

    if (el === null) {
      return;
    }

    el.scrollBy({
      left: dir * el.clientWidth * 0.6,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;

    if (el === null) {
      return;
    }

    // Compute initial state on mount (content may already overflow, or not).
    updateScrollState();

    el.addEventListener("scroll", updateScrollState, { passive: true });

    // Recompute when the container or its content changes size
    // (window resize, items added/removed, images loading, etc).
    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(el);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      resizeObserver.disconnect();
    };
  }, [updateScrollState]);

  return { scrollerRef, canScrollLeft, canScrollRight, scrollBy };
}
