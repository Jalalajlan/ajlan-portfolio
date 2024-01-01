import { useEffect } from "react";

type RefObject<T> = {
  current: T | null;
};

type Refs = Record<string, RefObject<HTMLElement>>;

type ObserverOptions = {
  root?: HTMLElement | null;
  rootMargin?: string;
  threshold?: number | number[];
};

const useIntersectionObserver = (
  refs: Refs,
  setActiveElement: (key: string) => void,
  options: ObserverOptions = {}
): void => {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          for (const [key, ref] of Object.entries(refs)) {
            if (entry.target === ref.current) {
              setActiveElement(key);
            }
          }
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, options);
    for (const ref of Object.values(refs)) {
      if (ref?.current) {
        observer.observe(ref.current);
      }
    }
    return () => {
      observer.disconnect();
    };
  }, [refs, setActiveElement, options]);
};

export default useIntersectionObserver;
