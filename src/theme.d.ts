import { PaletteColor, PaletteColorOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    project_color_blue: PaletteColorOptions;
    project_color_black: PaletteColorOptions;
    project_color_gray: PaletteColorOptions;
    project_color_white: PaletteColorOptions;
    project_color_red: PaletteColorOptions;
  }

  interface Palette {
    project_color_blue: PaletteColor;
    project_color_black: PaletteColor;
    project_color_gray: PaletteColor;
    project_color_white: PaletteColor;
    project_color_red: PaletteColor;
  }
}
