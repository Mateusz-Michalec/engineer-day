import { useEffect, useState } from "react";

interface Element {
  readonly [index: string]: boolean;
}

const useInView = (
  refs: React.MutableRefObject<undefined | HTMLElement | null>[]
) => {
  const [elements, setElements] = useState<Element>({});
  const [observedCount, setObservedCount] = useState<number>(0); // to keep track of the number of observed elements

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target.id;

          if (entry.isIntersecting) {
            setElements((prev) => {
              return {
                ...prev,
                [element]: true,
              };
            });
            setObservedCount((prev) => prev + 1);
          }
          if (observedCount + 1 === refs.length) observer.disconnect();
        });
      },
      {
        rootMargin: "-50px",
      }
    );

    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return elements;
};

export default useInView;
