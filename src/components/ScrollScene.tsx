import { useRef, useEffect, useCallback } from "react";
import type { ReactNode } from "react";

interface ScrollSceneProps {
  children: ReactNode;
  index: number;
  isLast?: boolean;
}

const ScrollScene = ({ children, index, isLast }: ScrollSceneProps) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const syncHeight = useCallback(() => {
    const scene = sceneRef.current;
    const content = contentRef.current;
    if (!scene || !content) return;

    const contentH = content.scrollHeight;
    const vh = window.innerHeight;
    const enterRunway = vh * 0.45;
    const exitRunway = isLast ? 0 : vh * 0.45;
    const totalHeight = enterRunway + contentH + exitRunway;
    scene.style.height = `${totalHeight}px`;
  }, [isLast]);

  useEffect(() => {
    const scene = sceneRef.current;
    const content = contentRef.current;
    if (!scene || !content) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    syncHeight();

    if (prefersReducedMotion) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = scene.getBoundingClientRect();
      const vh = window.innerHeight;

      // Skip off-screen scenes
      if (rect.bottom < -vh || rect.top > vh * 2) return;

      const contentH = content.scrollHeight;
      const scrollable = Math.max(contentH - vh, 0);
      const enterRunway = vh * 0.45;

      // Phase 1 - Enter: scene top goes from enterRunway below viewport top to 0
      const enter = Math.max(0, Math.min(1, 1 - rect.top / enterRunway));

      // Phase 2 - Scroll: after enter completes, scroll through content
      const scrolled = Math.max(0, -rect.top);
      const scroll =
        scrollable > 0 ? Math.max(0, Math.min(1, scrolled / scrollable)) : 1;

      // Phase 3 - Exit: after content is fully scrolled, next section rises over
      let exit = 0;
      if (!isLast) {
        const exitStart = scrollable;
        const exitRun = Math.max(rect.height - vh - scrollable, 1);
        exit = Math.max(0, Math.min(1, (scrolled - exitStart) / exitRun));
      }

      scene.style.setProperty("--enter", enter.toFixed(4));
      scene.style.setProperty("--scroll", scroll.toFixed(4));
      scene.style.setProperty("--exit", exit.toFixed(4));
      // Content translateY to simulate scrolling inside the sticky container
      scene.style.setProperty(
        "--scroll-y",
        `${-Math.round(scroll * scrollable)}px`,
      );
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    // Recalc height when content changes (lazy load, images, etc.)
    const resizeObserver = new ResizeObserver(() => {
      syncHeight();
      onScroll();
    });
    resizeObserver.observe(content);

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      resizeObserver.disconnect();
    };
  }, [syncHeight]);

  return (
    <div
      ref={sceneRef}
      data-scroll-scene
      className={`apple-scene${isLast ? " apple-scene--last" : ""}`}
      style={{ zIndex: index + 1 }}
    >
      <div className="apple-scene-sticky">
        <div ref={contentRef} className="apple-scene-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ScrollScene;
