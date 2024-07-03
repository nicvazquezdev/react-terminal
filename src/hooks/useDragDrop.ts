import { useState, useRef, useEffect, useCallback } from "react";

export const useDragDrop = (enabled: boolean) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const offset = useRef({ x: 0, y: 0 });

  const getClientCoordinates = (
    e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent,
  ) => {
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    return { clientX, clientY };
  };

  const handleMouseDown = useCallback(
    (
      e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    ) => {
      if (enabled && containerRef.current) {
        const { clientX, clientY } = getClientCoordinates(e);
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
        const { clientX, clientY } = getClientCoordinates(e);
        const newX = clientX - offset.current.x;
        const newY = clientY - offset.current.y;
        setPosition({ x: newX, y: newY });
        containerRef.current.style.left = `${newX}px`;
        containerRef.current.style.top = `${newY}px`;
      }
    },
    [isDragging],
  );

  const handleMouseUp = useCallback(() => setIsDragging(false), []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transition = isDragging
        ? "0s"
        : "var(--containerTransition)";
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
    position,
    setPosition,
  };
};
