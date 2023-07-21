import React from 'react';
import { Global as Global$1, css } from '@emotion/react';
import { useNsUITheme } from '../theme/NsUIProvider.js';

function Global({ styles }) {
  const theme = useNsUITheme();
  return /* @__PURE__ */ React.createElement(Global$1, {
    styles: css(typeof styles === "function" ? styles(theme) : styles)
  });
}

export { Global };
//# sourceMappingURL=Global.js.map
