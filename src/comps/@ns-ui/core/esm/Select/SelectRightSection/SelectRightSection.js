import React from 'react';
import { ChevronIcon } from './ChevronIcon.js';
import { CloseButton } from '../../CloseButton/CloseButton.js';

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function SelectRightSection({
  shouldClear,
  clearButtonProps,
  onClear,
  size,
  error
}) {
  return shouldClear ? /* @__PURE__ */ React.createElement(CloseButton, __spreadProps(__spreadValues({}, clearButtonProps), {
    variant: "transparent",
    onClick: onClear,
    size,
    onMouseDown: (event) => event.preventDefault()
  })) : /* @__PURE__ */ React.createElement(ChevronIcon, {
    error,
    size
  });
}
SelectRightSection.displayName = "@ns-ui/core/SelectRightSection";

export { SelectRightSection };
//# sourceMappingURL=SelectRightSection.js.map
