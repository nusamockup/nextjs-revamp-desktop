import { createStyles, getSortedBreakpoints, getSize, rem, getBreakpointValue } from '@ns-ui/core';

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
var useStyles = createStyles((theme, {
  controlSize,
  controlsOffset,
  orientation,
  height,
  includeGapInSize,
  breakpoints = [],
  slideGap
}) => {
  const horizontal = orientation === "horizontal";
  const getContainerStyles = (gap) => {
    if (!includeGapInSize)
      return {};
    const slideGapValue = getSize({ size: gap, sizes: theme.spacing });
    return {
      [orientation === "horizontal" ? "marginRight" : "marginBottom"]: `calc(${slideGapValue} * -1)`
    };
  };
  const hasDiff = breakpoints.some((v) => typeof v.slideGap !== "undefined" || typeof v.slideSize !== "undefined");
  const containerBreakpoints = !hasDiff ? null : getSortedBreakpoints(theme, breakpoints).reduce((acc, breakpoint) => {
    const property = "maxWidth" in breakpoint ? "max-width" : "min-width";
    const breakpointSize = getSize({
      size: property === "max-width" ? breakpoint.maxWidth : breakpoint.minWidth,
      sizes: theme.breakpoints
    });
    const breakpointSlideGap = typeof breakpoint.slideGap === "undefined" ? void 0 : rem(breakpoint.slideGap);
    const breakpointValue = getBreakpointValue(breakpointSize) - (property === "max-width" ? 1 : 0);
    acc[`@media (${property}: ${rem(breakpointValue)})`] = getContainerStyles(breakpointSlideGap);
    return acc;
  }, {});
  return {
    root: {
      position: "relative"
    },
    viewport: {
      height: rem(height),
      overflow: "hidden"
    },
    container: __spreadValues(__spreadValues({
      display: "flex",
      flexDirection: horizontal ? "row" : "column",
      height: rem(height)
    }, getContainerStyles(slideGap)), containerBreakpoints),
    controls: {
      position: "absolute",
      zIndex: 1,
      left: horizontal ? 0 : `calc(50% - ${rem(controlSize)} / 2)`,
      right: horizontal ? 0 : void 0,
      top: horizontal ? `calc(50% - ${rem(controlSize)} / 2)` : 0,
      bottom: horizontal ? void 0 : 0,
      display: "flex",
      flexDirection: horizontal ? "row" : "column",
      alignItems: "center",
      justifyContent: "space-between",
      paddingLeft: horizontal ? getSize({ size: controlsOffset, sizes: theme.spacing }) : void 0,
      paddingRight: horizontal ? getSize({ size: controlsOffset, sizes: theme.spacing }) : void 0,
      paddingTop: !horizontal ? getSize({ size: controlsOffset, sizes: theme.spacing }) : void 0,
      paddingBottom: !horizontal ? getSize({ size: controlsOffset, sizes: theme.spacing }) : void 0,
      pointerEvents: "none"
    },
    control: __spreadProps(__spreadValues({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minWidth: rem(controlSize),
      minHeight: rem(controlSize),
      borderRadius: rem(controlSize),
      pointerEvents: "all",
      backgroundColor: theme.white,
      color: theme.black,
      boxShadow: theme.shadows.md,
      opacity: theme.colorScheme === "dark" ? 0.65 : 0.85,
      border: `${rem(1)} solid ${theme.colors.gray[3]}`,
      transition: `opacity 150ms ${theme.transitionTimingFunction}`
    }, theme.fn.hover({ opacity: 1 })), {
      "&:active": theme.activeStyles
    }),
    indicators: {
      position: "absolute",
      bottom: horizontal ? theme.spacing.md : 0,
      top: horizontal ? void 0 : 0,
      left: horizontal ? 0 : void 0,
      right: horizontal ? 0 : theme.spacing.md,
      display: "flex",
      flexDirection: horizontal ? "row" : "column",
      justifyContent: "center",
      gap: rem(8),
      pointerEvents: "none"
    },
    indicator: {
      pointerEvents: "all",
      width: horizontal ? rem(25) : rem(5),
      height: horizontal ? rem(5) : rem(25),
      borderRadius: theme.radius.xl,
      backgroundColor: theme.white,
      boxShadow: theme.shadows.sm,
      opacity: 0.6,
      transition: `opacity 150ms ${theme.transitionTimingFunction}`,
      "&[data-active]": {
        opacity: 1
      }
    }
  };
});

export default useStyles;
//# sourceMappingURL=Carousel.styles.js.map
