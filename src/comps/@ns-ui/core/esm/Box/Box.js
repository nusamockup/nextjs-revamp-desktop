import React, { forwardRef } from 'react';
import { createPolymorphicComponent } from '@ns-ui/utils';
import { extractSystemStyles } from './style-system-props/extract-system-styles/extract-system-styles.js';
import { useSx } from './use-sx/use-sx.js';

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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const _Box = forwardRef((_a, ref) => {
  var _b = _a, { className, component, style, sx } = _b, others = __objRest(_b, ["className", "component", "style", "sx"]);
  const { systemStyles, rest } = extractSystemStyles(others);
  const Element = component || "div";
  return /* @__PURE__ */ React.createElement(Element, __spreadValues({
    ref,
    className: useSx(sx, systemStyles, className),
    style
  }, rest));
});
_Box.displayName = "@ns-ui/core/Box";
const Box = createPolymorphicComponent(_Box);

export { Box, _Box };
//# sourceMappingURL=Box.js.map
