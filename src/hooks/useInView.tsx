import { useEffect, useState } from "react";

interface Element {
  readonly [index: string]: boolean;
}

const useInView = (
  refs: React.MutableRefObject<undefined | HTMLElement | null>[]
) => {
  const [elements, setElements] = useState<Element>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target.id;
          if (
            entry.isIntersecting &&
            Object.keys(elements).length < refs.length
          )
            setElements((prev) => {
              return {
                ...prev,
                [element]: true,
              };
            });
          else return () => observer.disconnect();
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
