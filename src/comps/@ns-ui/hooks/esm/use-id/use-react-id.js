import React from 'react';

const __useId = React["useId".toString()] || (() => void 0);
function useReactId() {
  const id = __useId();
  return id ? `NsUI-${id.replace(/:/g, "")}` : "";
}

export { useReactId };
//# sourceMappingURL=use-react-id.js.map
