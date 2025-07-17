import { ComponentPropsWithRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

// Typage TypeScript
type PropsType = ComponentPropsWithRef<'button'>;

/** Affiche le bouton précédent dans la modal.
 * @description Rendu d’un bouton "précédent" avec une icône FontAwesome.
 * @param {ComponentPropsWithRef<'button'>} props - Propriétés du bouton, incluant notamment l’événement onClick pour naviguer vers l’élément précédent.
 * @returns JSX.Element - Le bouton précédent avec son icône.
 */
export function PrevButton(props: PropsType): React.JSX.Element {
  return (
    <button
      type="button"
      className="border hover:border-color-three hover:text-color-three rounded-full w-8 h-8"
      {...props}
      aria-label="précédant"
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
  );
}

/** Affiche le bouton suivant dans la modal.
 * @description Rendu d’un bouton "suivant" avec une icône FontAwesome.
 * @param {function} props - Propriétés du bouton, incluant notamment l’événement onClick pour naviguer vers l’élément suivant.
 * @returns JSX.Element - Le bouton suivant avec son icône.
 */
export function NextButton(props: PropsType): React.JSX.Element {
  return (
    <button
      type="button"
      className="border hover:border-color-three hover:text-color-three rounded-full w-8 h-8"
      {...props}
      aria-label="suivant"
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  );
}
