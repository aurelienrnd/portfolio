// import hooks
import { useRef, useState, useEffect, useContext } from 'react';
import ScrollContext from './context/ScrollContext.tsx';

export function SetMultyRefs<T extends Element>(numbOfRef: number) {
  const scrollContext = useContext(ScrollContext)!; // ! la valeur retournée ne sera pas null ni undefined à cet endroit
  const { isScrolling } = scrollContext;

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
    console.log('isScrolling :' + isScrolling);

    if (isScrolling) return;

    const observers: IntersectionObserver[] = [];

    refArray.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setVisibilities(prev => {
            const next = [...prev];
            next[index] = prev[index] || entry.isIntersecting;
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
  }, [numbOfRef, isScrolling]);

  return { setRef, visibilities };
}
