// useParagraphRefs.ts
import { useRef, useState, useEffect } from 'react';

export function SetMultyRefs<T extends Element>(numbOfRef: number) {
  const refArray = useRef<(T | null)[]>([]); //Initialise un tableau de références vide grâce à useRef.
  const [visibilities, setVisibilities] = useState<boolean[]>(() =>
    Array(numbOfRef).fill(false)
  );

  // Si le tableaux est vide alors on crée un tableau comportant le nombre de ref a utilisé, toutes initialisées à `null`
  if (refArray.current.length !== numbOfRef) {
    refArray.current = Array(numbOfRef).fill(null);
  }

  function setRef(index: number) {
    return function (refHtml: T | null) {
      refArray.current[index] = refHtml;
    };
  }

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    refArray.current.forEach((ref, index) => {
      if (!ref) return;
      if (visibilities[index]) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setVisibilities(prev => {
            const next = [...prev];
            next[index] = entry.isIntersecting;
            return next;
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [numbOfRef]);

  useEffect(() => {
    console.log(visibilities);
  }, [visibilities]);

  return { setRef, visibilities };
}
