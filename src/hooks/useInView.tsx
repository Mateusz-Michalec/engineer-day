import { useEffect, useRef, useState } from "react";

interface Element {
  readonly [index: string]: boolean;
}

const useInView = (
  refs: React.MutableRefObject<undefined | HTMLElement | null>[]
) => {
  const [elements, setElements] = useState<Element>({});
  const intersectedElements = useRef(new Set<string>());

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target.id;

        if (entry.isIntersecting) {
          if (!intersectedElements.current.has(element)) {
            setElements((prev) => ({
              ...prev,
              [element]: true,
            }));
            intersectedElements.current.add(element);
          }

          if (intersectedElements.current.size === refs.length)
            observer.disconnect();
        }
      });
    });

    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return elements;
};

export default useInView;
