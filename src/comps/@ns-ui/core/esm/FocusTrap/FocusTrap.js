import { cloneElement } from 'react';
import { isElement } from '@ns-ui/utils';
import { useFocusTrap, useMergedRef } from '@ns-ui/hooks';

function FocusTrap({
  children,
  active = true,
  refProp = "ref"
}) {
  const focusTrapRef = useFocusTrap(active);
  const ref = useMergedRef(focusTrapRef, children == null ? void 0 : children.ref);
  if (!isElement(children)) {
    return children;
  }
  return cloneElement(children, { [refProp]: ref });
}
FocusTrap.displayName = "@ns-ui/core/FocusTrap";

export { FocusTrap };
//# sourceMappingURL=FocusTrap.js.map
