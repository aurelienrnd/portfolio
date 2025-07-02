// import hooks
import { useRef, useState, useEffect } from 'react';
// type
type UseAnimationElementReturn<T extends Element> = {
  setRef: (index: number) => (refHtml: T | null) => void;
  visibilities: boolean[];
};

/** Gère un tableau de références HTML et leur visibilité à l'écran via IntersectionObserver.
 * @description Initialise un tableau contenant différentes références d’éléments HTML du composant ,
 *  puis utilise un observeur pour détecter l’apparition de chaque élément à l’écran et mettre à jour leur état de visibilité.
 * @param numbOfRef - Nombre d’éléments à observer
 * @function setRef - Fonction pour associer une ref à un élément HTML donné
 * @returns { setRef, visibilities } - setRef : fonction d’attachement de ref ; visibilities : tableau d'états de visibilité (true/false)
 */
export function UseAnimationElement<T extends Element>(
  numbOfRef: number
): UseAnimationElementReturn<T> {
  // Crée un tableau de références pour chaque élément HTML à observer dans le composant
  const refArray = useRef<(T | null)[]>([]);

  // Si le tableau est vide, on le remplit avec le nombre de références nécessaires, toutes initialisées à `null`
  if (refArray.current.length !== numbOfRef) {
    refArray.current = Array(numbOfRef).fill(null);
  }

  /** Ajoute une nouvelle référence au tableau.
   * @description Met à jour le tableau avec la référence d’un élément HTML du composant.
   * @returns {(T | null)} - Fonction de rappel pour associer l’élément HTML à sa position dans le tableau
   */
  function setRef(index: number): (refHtml: T | null) => void {
    return function (refHtml) {
      refArray.current[index] = refHtml;
    };
  }

  // Initialise un tableau qui gère l’état de visibilité de chaque référence
  const [visibilities, setVisibilities] = useState<boolean[]>(() =>
    Array(numbOfRef).fill(false)
  );

  useEffect(() => {
    // On crée un tableau d’observers et y associe chaque référence puis on vérifie que la référence est bien définie avant de l’observer
    const observersHarray: IntersectionObserver[] = [];
    refArray.current.forEach((ref, index) => {
      if (!ref) return;
      // Lorsque l’élément entre dans la zone visible de l’écran, on met à jour son état de visibilité
      const observer = new IntersectionObserver(
        ([entry]) => {
          setVisibilities(prev => {
            const next = [...prev];
            next[index] = entry.isIntersecting; // Si l’élément est déjà visible, on conserve son état à true
            return next;
          });
        },
        { threshold: 0.2 }
      );

      // Lance l’observation de l’élément et enregistre l’observer dans le tableau
      observer.observe(ref);
      observersHarray.push(observer);
    });

    // On déconnecte chaque observer du tableau pour nettoyer l’effet
    return () => {
      observersHarray.forEach(observer => observer.disconnect());
    };
  }, [numbOfRef]);

  return { setRef, visibilities };
}
