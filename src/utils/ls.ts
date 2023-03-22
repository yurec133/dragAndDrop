import { Layout } from "react-grid-layout";
import { IWidget, WIDGETITEMS } from "../constants/widget";

export const getFromItemsLS = (keyLS: string, item: Layout[] | IWidget[]) => {
  const savedItem = localStorage.getItem(keyLS);
  if (!savedItem) return item;
  return JSON.parse(savedItem || "");
};
export const setItemsLS = (items: IWidget[]) => {
  if (global.localStorage) {
    return global.localStorage.setItem(WIDGETITEMS, JSON.stringify(items));
  }
};

export const setLayoutToLS = (key: string, value: any, keyLC: string) => {
  if (global.localStorage) {
    global.localStorage.setItem(
      keyLC,
      JSON.stringify({
        [key]: value,
      })
    );
  }
};

export const getLayoutFromLS = (key: any, keyLS: string, items: Layout[] | IWidget[]) => {
  const savedItem = global.localStorage.getItem(keyLS);
  if (!savedItem) return {lg: items};
  const obj = JSON.parse(savedItem || "")
  return obj[key];
};
