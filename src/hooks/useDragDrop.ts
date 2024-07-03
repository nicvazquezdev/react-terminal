import { useState, useRef, useEffect, useCallback } from "react";

export const useDragDrop = (enabled: boolean) => {
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = useCallback(
    (
      e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    ) => {
      console.log("mousedown");
      if (enabled && containerRef.current) {
        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

        offset.current = {
          x: clientX - containerRef.current.offsetLeft,
          y: clientY - containerRef.current.offsetTop,
        };
        setIsDragging(true);
      }
    },
    [enabled],
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (isDragging && containerRef.current) {
        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

        containerRef.current.style.left = `${clientX - offset.current.x}px`;
        containerRef.current.style.top = `${clientY - offset.current.y}px`;
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
      document.addEventListener("touchmove", handleMouseMove);
      document.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      if (enabled) {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        document.removeEventListener("touchmove", handleMouseMove);
        document.removeEventListener("touchend", handleMouseUp);
      }
    };
  }, [handleMouseMove, handleMouseUp, enabled]);

  return {
    containerRef,
    handleMouseDown,
  };
};
