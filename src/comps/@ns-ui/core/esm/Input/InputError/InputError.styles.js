import { createStyles, getSize, rem } from '@ns-ui/styles';

var useStyles = createStyles((theme, _params, { size }) => ({
  error: {
    wordBreak: "break-word",
    color: theme.fn.variant({ variant: "filled", color: "red" }).background,
    fontSize: `calc(${getSize({ size, sizes: theme.fontSizes })} - ${rem(2)})`,
    lineHeight: 1.2,
    display: "block"
  }
}));

export default useStyles;
//# sourceMappingURL=InputError.styles.js.map
