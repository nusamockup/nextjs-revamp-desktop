import { createStyles, getSize, rem } from '@ns-ui/styles';

var useStyles = createStyles((theme, { padding }) => {
  const paddingValue = getSize({ size: padding, sizes: theme.spacing });
  return {
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: paddingValue,
      paddingRight: `calc(${paddingValue} - ${rem(5)})`,
      position: "sticky",
      top: 0,
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
    }
  };
});

export default useStyles;
//# sourceMappingURL=ModalBaseHeader.styles.js.map
