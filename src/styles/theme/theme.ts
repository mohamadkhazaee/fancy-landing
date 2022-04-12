import { createTheme as createMuiTheme } from "@mui/material/styles";

// Create a theme instance.
export const createTheme = () => {
  const initialTheme = createMuiTheme({
    direction: "rtl",
    palette: {
      text: {
        primary: "#fff",
        secondary: "#B6B6B6",
      },
      primary: {
        main: "#202121",
      },
      divider: "#343535",
      neutral: {
        n1: "#202121",
        n2: "#1b1b1b",
        n3: "#252526",
        n4: "#343637",
      },
    },
    typography: {
      fontFamily: "Cairo",
      caption: {
        fontSize: "0.85rem",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "100px",
            padding: "5px 30px",
            background: "transparent",
            color: "#fff",
            border: "2px solid #fff",
            textTransform: "none",
            fontWeight: "bold",
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            padding: "5px",
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            width: "100%",
            "& label.Mui-focused": {
              color: "#8A8A8A",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "#8A8A8A",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#8A8A8A",
              },
              "&:hover fieldset": {
                borderColor: "#8A8A8A",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#8A8A8A",
              },
            },
          },
        },
      },
    },
  });
  return createMuiTheme(initialTheme, {
    components: {},
  });
};

export const theme = createTheme();

if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  console.log(theme);
}
