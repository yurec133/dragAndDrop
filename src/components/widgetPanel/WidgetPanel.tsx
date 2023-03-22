import React, { useContext } from "react";
import Drawer from "@mui/material/Drawer";
import { DrawerNavContext } from "../../contexts/drawerNav-context";
import { drawerWidthRight } from "../../constants/widget";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { renderWidgetInfo } from "../../utils/tableStyled";
import styles from "./WidgetPanel.module.scss";

export const WidgetPanel = () => {
  const { openWidget, toggleOpenWidget, configWidget } =
    useContext(DrawerNavContext);
  const theme = useTheme();

  return (
    <Drawer
      PaperProps={{
        sx: {
          backgroundColor: "#f5f5f5",
        },
      }}
      sx={{
        width: drawerWidthRight,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidthRight,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="right"
      open={openWidget}
    >
      <div className={styles.header}>
        <IconButton onClick={toggleOpenWidget}>
          {theme.direction === "rtl" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <div className={styles.frame}>
        <Paper elevation={2}>{renderWidgetInfo(configWidget)}</Paper>
      </div>
    </Drawer>
  );
};
