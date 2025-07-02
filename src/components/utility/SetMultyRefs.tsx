// useParagraphRefs.ts
import { useRef } from 'react';

export function SetMultyRefs<T>(numbOfRef: number) {
  const refArray = useRef<(T | null)[]>([]); //Initialise un tableau de références vide grâce à useRef.

  // Si le tableaux est vide alors on crée un tableau comportant le nombre de ref a utilisé, toutes initialisées à `null`
  if (refArray.current.length !== numbOfRef) {
    refArray.current = Array(numbOfRef).fill(null);
  }

  function setRef(index: number) {
    return function (refHtml: T | null) {
      refArray.current[index] = refHtml;
      console.log(`setRef ${index}`, refHtml);
    };
  }

  return { setRef };
}
