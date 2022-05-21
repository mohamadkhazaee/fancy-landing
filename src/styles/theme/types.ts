declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
  interface Palette {
    neutral: {
      n1: string;
      n2: string;
      n3: string;
      n4: string;
      mute: string;
    };
  }
  interface PaletteOptions {
    neutral: {
      n1: string;
      n2: string;
      n3: string;
      n4: string;
      mute: string;
    };
  }

  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
}

export {};
