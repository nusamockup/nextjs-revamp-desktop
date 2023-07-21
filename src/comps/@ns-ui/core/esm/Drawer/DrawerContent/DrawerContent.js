import React, { forwardRef } from 'react';
import { useComponentDefaultProps } from '@ns-ui/styles';
import { useDrawerContext } from '../Drawer.context.js';
import { ScrollArea } from '../../ScrollArea/ScrollArea.js';
import { ModalBase } from '../../ModalBase/ModalBase.js';

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
const defaultProps = {
  shadow: "xl"
};
const DrawerContent = forwardRef((props, ref) => {
  const _a = useComponentDefaultProps("ModalContent", defaultProps, props), { children, scrollAreaComponent } = _a, others = __objRest(_a, ["children", "scrollAreaComponent"]);
  const ctx = useDrawerContext();
  const Scroll = scrollAreaComponent || ctx.scrollAreaComponent || ScrollArea.Autosize;
  return /* @__PURE__ */ React.createElement(ModalBase.Content, __spreadValues({
    ref,
    radius: 0
  }, others), /* @__PURE__ */ React.createElement(Scroll, {
    mah: "100vh"
  }, children));
});

export { DrawerContent };
//# sourceMappingURL=DrawerContent.js.map
