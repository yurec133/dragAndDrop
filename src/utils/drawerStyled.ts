import { styled } from "@mui/material/styles";
import { drawerWidthRight } from "../constants/widget";


export const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "openRight",
})<{ open?: boolean; openRight?: boolean }>(({ theme, open, openRight }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
  paddingBottom: '170px',
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidthRight}px`,
  marginRight: `-${drawerWidthRight}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
  ...(openRight && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
}));
