import React, { useContext, useMemo } from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import VerticalSplitIcon from "@mui/icons-material/VerticalSplit";
import { DrawerNavContext } from "../../contexts/drawerNav-context";
import AppBar from "@mui/material/AppBar";
import TabletAndroidIcon from "@mui/icons-material/TabletAndroid";
import DesktopMacOutlinedIcon from "@mui/icons-material/DesktopMacOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Header.module.scss";
import IconToggleButton from "../button/IconToggleButton/IconToggleButton";

export const Header = () => {
  const { toggleOpenWidget, handlerBreakpoint, toggleOpenNav, breakpoint } =
    useContext(DrawerNavContext);

  const memoToggleButton = useMemo(() => {
    return [
      { size: "", icon: <DesktopMacOutlinedIcon /> },
      { size: "768px", icon: <TabletAndroidIcon /> },
      {
        size: "1024px",
        icon: <TabletAndroidIcon style={{ transform: "rotate(90deg)" }} />,
      },
      { size: "320px", icon: <PhoneAndroidOutlinedIcon /> },
      {
        size: "568px",
        icon: (
          <PhoneAndroidOutlinedIcon style={{ transform: "rotate(90deg)" }} />
        ),
      },
    ];
  }, []);

  return (
    <AppBar position="fixed" color={"secondary"}>
      <Toolbar className={styles.toolbar}>
        <IconButton edge="start" color="inherit" onClick={toggleOpenNav}>
          <MenuIcon />
        </IconButton>
        <IconToggleButton
          value={breakpoint}
          size={"small"}
          color={"standard"}
          toggleButton={memoToggleButton}
          dispatchUpdate={handlerBreakpoint}
        />
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleOpenWidget}
        >
          <VerticalSplitIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
