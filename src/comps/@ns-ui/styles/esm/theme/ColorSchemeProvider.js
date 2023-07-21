import React, { createContext, useContext } from 'react';

const ColorSchemeContext = createContext(null);
function useNsUIColorScheme() {
  const ctx = useContext(ColorSchemeContext);
  if (!ctx) {
    throw new Error("useNsUIColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component");
  }
  return ctx;
}
function ColorSchemeProvider({
  colorScheme,
  toggleColorScheme,
  children
}) {
  return /* @__PURE__ */ React.createElement(ColorSchemeContext.Provider, {
    value: { colorScheme, toggleColorScheme }
  }, children);
}
ColorSchemeProvider.displayName = "@ns-ui/core/ColorSchemeProvider";

export { ColorSchemeProvider, useNsUIColorScheme };
//# sourceMappingURL=ColorSchemeProvider.js.map
