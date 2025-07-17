import { useCallback } from 'react';
import { EmblaCarouselType } from 'embla-carousel';

// Typage TypeScript
export type UsePrevNextButtonsType = {
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

/** Gére les boutons "précédent" et "suivant" d’un carrousel Embla.
 * @description Fournit deux callbacks permettant de faire défiler le carrousel vers la gauche ou la droite.
 * @param emblaApi - Instance de l’API EmblaCarousel (peut être undefined si non initialisée).
 * @returns {{ onPrevButtonClick, onNextButtonClick }} - Fonctions à attacher aux boutons de navigation.
 */
function usePrevNextCarouselButtons(
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType {
  const onPrevButtonClick: () => void = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick: () => void = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return {
    onPrevButtonClick,
    onNextButtonClick,
  };
}

export default usePrevNextCarouselButtons;
