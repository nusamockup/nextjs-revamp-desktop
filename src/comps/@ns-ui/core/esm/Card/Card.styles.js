import { createStyles } from '@ns-ui/styles';

var useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    overflow: "hidden",
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white
  }
}));

export default useStyles;
//# sourceMappingURL=Card.styles.js.map
