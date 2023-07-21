import { createStyles, rem } from '@ns-ui/core';

var useStyles = createStyles(() => ({
  monthsList: {
    borderCollapse: "collapse",
    borderWidth: 0,
    cursor: "pointer"
  },
  monthsListCell: {
    padding: 0,
    "&[data-with-spacing]": {
      padding: rem(0.5)
    }
  },
  monthsListRow: {}
}));

export default useStyles;
//# sourceMappingURL=MonthsList.styles.js.map
