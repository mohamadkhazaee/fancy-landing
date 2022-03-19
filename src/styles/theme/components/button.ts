import { Components, Theme } from "@mui/material";
export const MuiButton = (theme: Theme): Components["MuiButton"] => ({
  defaultProps: {
    disableElevation: true,
  },
  styleOverrides: {
    root: {
      borderRadius: +theme.shape.borderRadius * 2,
      padding: "6px 16px",
      minWidth: "initial",
    },
    // sizeLarge: {
    //   padding: "10px 16px",
    // },
    // sizeSmall: {
    // },
    startIcon: {
      marginLeft: -8,
      marginRight: 4,
      "&>*:nth-of-type(1)": {
        fontSize: theme.typography.pxToRem(24),
      },
    },
    endIcon: {
      marginRight: -8,
      marginLeft: 2,
      "&>*:nth-of-type(1)": {
        fontSize: theme.typography.pxToRem(24),
      },
    },
  },
});

export const MuiIconButton = (theme: Theme): Components["MuiIconButton"] => ({
  defaultProps: {
    TouchRippleProps: {
      center: false,
    },
  },
  styleOverrides: {
    // root: {
    //   borderRadius: +theme.shape.borderRadius * 2,
    //   backgroundColor: theme.palette.background.default,
    //   color: theme.palette.text.secondary,
    //   "&:hover": {
    //     backgroundColor: theme.palette.action.disabledBackground,
    //   },
    // },
    // sizeLarge: {
    //   fontSize: theme.typography.pxToRem(24),
    // },
    // sizeSmall: {
    //   fontSize: theme.typography.pxToRem(16),
    //   padding: "8px",
    // },
  },
});
