import { FC, PropsWithChildren, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { PortalsIds } from 'Constants';

interface Portal extends PropsWithChildren {
  wrapperId: PortalsIds;
}

const createWrapperAppendToBody = (wrapperId: string) => {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  wrapperElement.setAttribute('data-testid', wrapperId);
  document.body.appendChild(wrapperElement);

  return wrapperElement;
};

export const Portal: FC<Portal> = ({ children, wrapperId }) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
    null,
  );

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperAppendToBody(wrapperId);
    }
    setWrapperElement(element);

    return () => {
      if (systemCreated && element && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
};
