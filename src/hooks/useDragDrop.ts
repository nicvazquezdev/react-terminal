import { useState, useRef, useEffect, useCallback } from "react";

export const useDragDrop = (enabled: boolean) => {
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (enabled && containerRef.current) {
        offset.current = {
          x: e.clientX - containerRef.current.offsetLeft,
          y: e.clientY - containerRef.current.offsetTop,
        };
        setIsDragging(true);
      }
    },
    [enabled],
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging && containerRef.current) {
        containerRef.current.style.left = `${e.clientX - offset.current.x}px`;
        containerRef.current.style.top = `${e.clientY - offset.current.y}px`;
      }
    },
    [isDragging],
  );

  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
    }
  }, [isDragging]);

  useEffect(() => {
    if (containerRef.current) {
      if (isDragging) {
        containerRef.current.style.transition = "0s";
      } else {
        containerRef.current.style.transition = "var(--containerTransition)";
      }
    }
  }, [isDragging]);

  useEffect(() => {
    if (enabled) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      if (enabled) {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      }
    };
  }, [handleMouseMove, handleMouseUp, enabled]);

  return {
    containerRef,
    handleMouseDown,
  };
};
