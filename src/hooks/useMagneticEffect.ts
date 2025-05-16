import { useEffect } from "react";

export function useMagneticEffect(selector = ".magnetic", strength = 0.4) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const handleMouseMove = (e: MouseEvent) => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        (el as HTMLElement).style.transform = `translate(${x * strength}px, ${
          y * strength
        }px)`;
      });
    };

    const reset = () => {
      elements.forEach((el) => {
        (el as HTMLElement).style.transform = "translate(0, 0)";
      });
    };

    elements.forEach((el) => {
      const element = el as HTMLElement;
      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseleave", reset);
    });

    return () => {
      elements.forEach((el) => {
        const element = el as HTMLElement;
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseleave", reset);
      });
    };
  }, [selector, strength]);
}
