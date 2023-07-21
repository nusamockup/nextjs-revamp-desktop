import { createStyles } from '@ns-ui/styles';

var useStyles = createStyles(() => ({
  input: {
    "&:not(:disabled)": {
      cursor: "pointer",
      "&::selection": {
        backgroundColor: "transparent"
      }
    }
  }
}));

export default useStyles;
//# sourceMappingURL=Select.styles.js.map
