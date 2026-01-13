import { useEffect } from "react";

export function useMagneticEffect(selector = ".magnetic", strength = 0.15) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const handleMouseMove = (e: MouseEvent) => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const distance = Math.sqrt(x * x + y * y);
        
        // Only apply effect when mouse is close enough
        if (distance < 100) {
          const normalizedX = (x / rect.width) * strength;
          const normalizedY = (y / rect.height) * strength;
          
          (el as HTMLElement).style.transform = `translate3d(${normalizedX}px, ${normalizedY}px, 0)`;
        }
      });
    };

    const reset = () => {
      elements.forEach((el) => {
        (el as HTMLElement).style.transform = "translate3d(0, 0, 0)";
      });
    };

    elements.forEach((el) => {
      const element = el as HTMLElement;
      // Only apply to elements that are actually hovered
      element.addEventListener("mouseenter", () => {
        window.addEventListener("mousemove", handleMouseMove);
      });
      element.addEventListener("mouseleave", () => {
        reset();
        window.removeEventListener("mousemove", handleMouseMove);
      });
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      elements.forEach(() => {
        reset();
      });
    };
  }, [selector, strength]);
}
