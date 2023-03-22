import { createContext } from "react";
import {IWidgetConfig, NewWidgetConfig} from "../constants/widget";

export interface IDrawerNavContext {
  openNav: boolean;
  openWidget: boolean;
  toggleOpenNav: () => void;
  toggleOpenWidget: () => void;
  updateConfigWidget: (item: IWidgetConfig) => void;
  handlerBreakpoint: (item: string) => void;
  configWidget: IWidgetConfig;
  breakpoint: string;
}
export const defaultState = {
  openNav: false,
  openWidget: false,
  toggleOpenNav: () => {},
  toggleOpenWidget: () => {},
  updateConfigWidget: () => {},
  handlerBreakpoint: () => {},
  configWidget: NewWidgetConfig,
  breakpoint: '',
};
export const DrawerNavContext = createContext<IDrawerNavContext>(defaultState);
