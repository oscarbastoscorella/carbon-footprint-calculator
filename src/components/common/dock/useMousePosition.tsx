import { RefObject, useCallback, useEffect, useState } from "react";

type MousePosition = {
  x: number;
  y: number;
};

function useMousePosition(
  elementRef: RefObject<HTMLButtonElement | null>,
): MousePosition {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

  const updateMousePosition = useCallback(
    (e: MouseEvent) => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const x = e.clientX - centerX;

      setPosition({ x, y: e.clientY });
    },
    [elementRef],
  );

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [updateMousePosition]);

  return position;
}

export default useMousePosition;
