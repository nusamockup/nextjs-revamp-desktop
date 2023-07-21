import { createStyles } from '@ns-ui/styles';

var useStyles = createStyles((_theme, { orientation, placement }) => ({
  root: {
    display: orientation === "vertical" ? "flex" : void 0,
    flexDirection: placement === "right" ? "row-reverse" : "row"
  }
}));

export default useStyles;
//# sourceMappingURL=Tabs.styles.js.map
