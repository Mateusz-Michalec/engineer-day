import { useEffect, useRef, useState } from "react";

interface Element {
  readonly [index: string]: boolean;
}

const useInView = (
  refs: React.MutableRefObject<undefined | HTMLElement | null>[]
) => {
  const [elements, setElements] = useState<Element>({});
  const triggeredCount = useRef<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (triggeredCount.current < refs.length)
          entries.forEach((entry) => {
            const element = entry.target.id;
            if (entry.isIntersecting) {
              triggeredCount.current += 1;
              setElements((prev) => {
                return {
                  ...prev,
                  [element]: true,
                };
              });
            } else return () => observer.disconnect();
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
