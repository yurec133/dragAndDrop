import React, { useCallback } from "react";
import { DrawerNavContext, defaultState } from "../contexts/drawerNav-context";
import {IWidgetConfig} from "../constants/widget";
interface IDrawerNavProvider {
  children: React.ReactNode;
}
const DrawerNavProvider = ({ children }: IDrawerNavProvider) => {
  const [openNav, setOpenNav] = React.useState(defaultState.openNav);
  const [openWidget, setOpenWidget] = React.useState(defaultState.openWidget);
  const [configWidget, setWidgetConfig] = React.useState(
    defaultState.configWidget
  );
  const [breakpoint, setBreakpoint] = React.useState(defaultState.breakpoint);


  const toggleOpenNav = useCallback(() => {
    setOpenNav((current) => !current);
      setTimeout(() => {
          window.dispatchEvent(new Event("resize"));
      }, 500);
  }, []);

  const toggleOpenWidget = useCallback(() => {
    setOpenWidget((current) => !current);
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 500);
  }, []);

  const updateConfigWidget = useCallback((item: IWidgetConfig) => {
    setWidgetConfig((prevState) => ({
      ...prevState,
      x: item.x,
      y: item.y,
      w: item.w,
      h: item.h,
      minW: item.minW,
      minH: item.minH,
    }));
  }, []);

  const handlerBreakpoint = useCallback((str: string) => {
    setBreakpoint(str);
      setTimeout(() => {
          window.dispatchEvent(new Event("resize"));
      }, 200);
  }, []);

  return (
    <DrawerNavContext.Provider
      value={{
        openNav,
        toggleOpenNav,
        openWidget,
        toggleOpenWidget,
        configWidget,
        updateConfigWidget,
        breakpoint,
        handlerBreakpoint,
      }}
    >
      {children}
    </DrawerNavContext.Provider>
  );
};

export default DrawerNavProvider;
