import React, { memo } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import { IWidget } from "../../constants/widget";
import styles from "./Widget.module.scss";

interface IWidgetItem {
  handleOpen: (item: IWidget) => void;
  handleRemoveItem: (id: string) => void;
  item: IWidget;
}

const Widget = ({ handleOpen, handleRemoveItem, item }: IWidgetItem) => {
  return (
    <Card className={styles.widget}>
      <CardHeader
        action={
          <>
            <IconButton aria-label="OpenInNew" onClick={() => handleOpen(item)}>
              <OpenInNewIcon />
            </IconButton>
            <IconButton
              aria-label="Highlight"
              onClick={() => handleRemoveItem(item.id)}
            >
              <HighlightOffRoundedIcon />
            </IconButton>
          </>
        }
        title={item.title}
      />
      <Divider />
      <CardContent>
        <img src={item.content} alt="Static Chart" />
      </CardContent>
    </Card>
  );
};
export default memo(Widget);
