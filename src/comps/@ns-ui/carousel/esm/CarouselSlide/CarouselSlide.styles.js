import { createStyles, getSortedBreakpoints, getSize, getBreakpointValue, rem } from '@ns-ui/core';

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
var useStyles = createStyles((theme, { size, gap, orientation, includeGapInSize, breakpoints = [] }) => {
  const getSlideStyles = (slideGap, slideSize) => {
    const slideGapValue = getSize({
      size: slideGap,
      sizes: theme.spacing
    });
    const flexBasisValue = rem(slideSize);
    const marginStyles = includeGapInSize ? {
      [orientation === "horizontal" ? "paddingRight" : "paddingBottom"]: slideGapValue
    } : {
      [orientation === "horizontal" ? "marginRight" : "marginBottom"]: slideGapValue
    };
    return __spreadValues({
      flex: `0 0 ${flexBasisValue}`
    }, marginStyles);
  };
  const hasDiff = breakpoints.some((v) => typeof v.slideGap !== "undefined" || typeof v.slideSize !== "undefined");
  const slideBreakpoints = !hasDiff ? null : getSortedBreakpoints(theme, breakpoints).reduce((acc, breakpoint) => {
    const property = "maxWidth" in breakpoint ? "max-width" : "min-width";
    const breakpointSize = getSize({
      size: property === "max-width" ? breakpoint.maxWidth : breakpoint.minWidth,
      sizes: theme.breakpoints
    });
    const breakpointGap = typeof breakpoint.slideGap === "undefined" ? gap : breakpoint.slideGap;
    const breakpointValue = getBreakpointValue(breakpointSize) - (property === "max-width" ? 1 : 0);
    acc[`@media (${property}: ${rem(breakpointValue)})`] = getSlideStyles(breakpointGap, breakpoint.slideSize);
    return acc;
  }, {});
  return {
    slide: __spreadValues(__spreadValues({
      position: "relative"
    }, getSlideStyles(gap, size)), slideBreakpoints)
  };
});

export default useStyles;
//# sourceMappingURL=CarouselSlide.styles.js.map
