import { ComponentPropsWithRef } from 'react';
// Libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

type ButtonProps = ComponentPropsWithRef<'button'>;

export function PrevButton(props: ButtonProps) {
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

export function NextButton(props: ButtonProps) {
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
