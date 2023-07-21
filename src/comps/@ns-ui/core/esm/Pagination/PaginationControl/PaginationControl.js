import React, { forwardRef } from 'react';
import { useComponentDefaultProps } from '@ns-ui/styles';
import { usePaginationContext } from '../Pagination.context.js';
import useStyles from './PaginationControl.styles.js';
import { UnstyledButton } from '../../UnstyledButton/UnstyledButton.js';

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
  withPadding: true
};
const PaginationControl = forwardRef((props, ref) => {
  const _a = useComponentDefaultProps("PaginationControl", defaultProps, props), { active, className, disabled, withPadding } = _a, others = __objRest(_a, ["active", "className", "disabled", "withPadding"]);
  const ctx = usePaginationContext();
  const { classes, cx } = useStyles({ color: ctx.color, radius: ctx.radius, withPadding }, ctx.stylesApi);
  return /* @__PURE__ */ React.createElement(UnstyledButton, __spreadProps(__spreadValues({}, others), {
    disabled,
    "data-active": active || void 0,
    "data-disabled": disabled || void 0,
    ref,
    className: cx(classes.control, className)
  }));
});
PaginationControl.displayName = "@ns-ui/core/PaginationControl";

export { PaginationControl };
//# sourceMappingURL=PaginationControl.js.map
