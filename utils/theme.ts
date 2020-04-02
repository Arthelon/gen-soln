import { createMuiTheme } from "@material-ui/core/styles";

import { Spacing, Nonprofit } from "./types";

const margins: Record<Spacing, string> = {
  VERTICAL: "4.5vh",
  HORIZONTAL: "8.5vw",
  LARGE_VERTICAL: "7vh"
};

// Created a special variable for primary color since it is imported by _document.tsx
export const MAIN = "#403C70";

const createNonprofitMuiTheme = (nonprofit: Nonprofit | undefined) =>
  createMuiTheme({
    palette: {
      primary: {
        main: MAIN
      },
      secondary: {
        main: "rgba(64, 59, 112, 0.38)"
      },
      background: {
        default: "#F5F5F7"
      },
      nonprofitColors: nonprofit?.colors
    },
    props: {
      MuiTextField: {
        variant: "filled",
        size: "small",
        color: "secondary"
      }
    },
    overrides: {
      MuiFilledInput: {
        root: {
          backgroundColor: "#F5F5F5"
        }
      }
    },
    nonprofitImages: nonprofit?.images,
    margins
  });

export default createNonprofitMuiTheme;
