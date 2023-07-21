import React, { createContext, useContext } from 'react';
import { ThemeProvider, Global } from '@emotion/react';
import { DEFAULT_THEME } from './default-theme.js';
import { GlobalStyles } from './GlobalStyles.js';
import { NsUICssVariables } from './NsUICssVariables.js';
import { mergeThemeWithFunctions } from './utils/merge-theme/merge-theme.js';
import { filterProps } from './utils/filter-props/filter-props.js';
import { NormalizeCSS } from './NormalizeCSS.js';

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const NsUIProviderContext = createContext({
  theme: DEFAULT_THEME
});
function useNsUITheme() {
  var _a;
  return ((_a = useContext(NsUIProviderContext)) == null ? void 0 : _a.theme) || DEFAULT_THEME;
}
function useNsUIProviderStyles(component) {
  const theme = useNsUITheme();
  const getStyles = (name) => {
    var _a, _b, _c, _d;
    return {
      styles: ((_a = theme.components[name]) == null ? void 0 : _a.styles) || {},
      classNames: ((_b = theme.components[name]) == null ? void 0 : _b.classNames) || {},
      variants: (_c = theme.components[name]) == null ? void 0 : _c.variants,
      sizes: (_d = theme.components[name]) == null ? void 0 : _d.sizes
    };
  };
  if (Array.isArray(component)) {
    return component.map(getStyles);
  }
  return [getStyles(component)];
}
function useNsUIEmotionCache() {
  var _a;
  return (_a = useContext(NsUIProviderContext)) == null ? void 0 : _a.emotionCache;
}
function useComponentDefaultProps(component, defaultProps, props) {
  var _a;
  const theme = useNsUITheme();
  const contextPropsPayload = (_a = theme.components[component]) == null ? void 0 : _a.defaultProps;
  const contextProps = typeof contextPropsPayload === "function" ? contextPropsPayload(theme) : contextPropsPayload;
  return __spreadValues(__spreadValues(__spreadValues({}, defaultProps), contextProps), filterProps(props));
}
function NsUIProvider({
  theme,
  emotionCache,
  withNormalizeCSS = false,
  withGlobalStyles = false,
  withCSSVariables = false,
  inherit = false,
  children
}) {
  const ctx = useContext(NsUIProviderContext);
  const mergedTheme = mergeThemeWithFunctions(DEFAULT_THEME, inherit ? __spreadValues(__spreadValues({}, ctx.theme), theme) : theme);
  return /* @__PURE__ */ React.createElement(ThemeProvider, {
    theme: mergedTheme
  }, /* @__PURE__ */ React.createElement(NsUIProviderContext.Provider, {
    value: { theme: mergedTheme, emotionCache }
  }, withNormalizeCSS && /* @__PURE__ */ React.createElement(NormalizeCSS, null), withGlobalStyles && /* @__PURE__ */ React.createElement(GlobalStyles, {
    theme: mergedTheme
  }), withCSSVariables && /* @__PURE__ */ React.createElement(NsUICssVariables, {
    theme: mergedTheme
  }), typeof mergedTheme.globalStyles === "function" && /* @__PURE__ */ React.createElement(Global, {
    styles: mergedTheme.globalStyles(mergedTheme)
  }), children));
}
NsUIProvider.displayName = "@ns-ui/core/NsUIProvider";

export { NsUIProvider, useComponentDefaultProps, useNsUIEmotionCache, useNsUIProviderStyles, useNsUITheme };
//# sourceMappingURL=NsUIProvider.js.map
