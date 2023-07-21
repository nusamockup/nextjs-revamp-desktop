import { createStyles, getSize } from '@ns-ui/styles';

var useStyles = createStyles((theme, { spacing, align, justify }) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: align,
    justifyContent: justify,
    gap: getSize({ size: spacing, sizes: theme.spacing })
  }
}));

export default useStyles;
//# sourceMappingURL=Stack.styles.js.map
