import { INewWidget } from "../constants/widget";
import React from "react";

export const onDragStart = (
  e: React.DragEvent<HTMLButtonElement>,
  item: INewWidget
) => {
  const dataList = e.dataTransfer;
  const itemString = JSON.stringify(item);
  if (dataList) {
    dataList.setData("itemWidget", itemString);
  }
};

export const onceDropDragOver = (fn: (isItem: boolean) => void) => {
  let executed = false;
  return function () {
    if (!executed) {
      executed = true;
      return fn(true);
    }
    return null;
  };
};
