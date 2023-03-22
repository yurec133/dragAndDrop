import React, { useContext } from "react";
import {
  drawerWidthRight,
  NewWidgetChart,
  NewWidgetGauge,
  NewWidgetGrid,
} from "../../../constants/widget";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import GridOnIcon from "@mui/icons-material/GridOn";
import ArticleIcon from "@mui/icons-material/Article";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { onDragStart } from "../../../utils/dragAndDrop";
import Grid from "@mui/material/Unstable_Grid2";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import InputSearch from "../../form/inputSearch/InputSearch";
import styles from "./WidgetList.module.scss";
import { DrawerNavContext } from "../../../contexts/drawerNav-context";
import { useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const WidgetList = () => {
  const { openNav, toggleOpenNav } = useContext(DrawerNavContext);
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState<string | false>("panel1a");
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

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
      anchor="left"
      open={openNav}
    >
      <div className={styles.header}>
        <IconButton onClick={toggleOpenNav}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <div className={styles.widgetList}>
        <InputSearch />
        <Divider style={{ margin: "15px 0" }} />
        <Accordion
          expanded={expanded === "panel1a"}
          onChange={handleChange("panel1a")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Category1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid xs="auto" padding={0}>
                <IconButton
                  style={{ cursor: "grab" }}
                  draggable={true}
                  onDragStart={(e) => onDragStart(e, NewWidgetGrid)}
                  unselectable="on"
                >
                  <EqualizerIcon />
                </IconButton>
              </Grid>
              <Grid xs="auto" padding={0}>
                <IconButton
                  style={{ cursor: "grab" }}
                  draggable={true}
                  onDragStart={(e) => onDragStart(e, NewWidgetChart)}
                  unselectable="on"
                >
                  <ArticleIcon />
                </IconButton>
              </Grid>
              <Grid xs="auto" padding={0}>
                <IconButton
                  style={{ cursor: "grab" }}
                  draggable={true}
                  onDragStart={(e) => onDragStart(e, NewWidgetGauge)}
                  unselectable="on"
                >
                  <GridOnIcon />
                </IconButton>
              </Grid>
              <Grid xs="auto" padding={0}>
                <IconButton
                  style={{ cursor: "grab" }}
                  draggable={true}
                  onDragStart={(e) => onDragStart(e, NewWidgetGrid)}
                  unselectable="on"
                >
                  <EqualizerIcon />
                </IconButton>
              </Grid>
              <Grid xs="auto" padding={0}>
                <IconButton
                  style={{ cursor: "grab" }}
                  draggable={true}
                  onDragStart={(e) => onDragStart(e, NewWidgetChart)}
                  unselectable="on"
                >
                  <ArticleIcon />
                </IconButton>
              </Grid>
              <Grid xs="auto" padding={0}>
                <IconButton
                  style={{ cursor: "grab" }}
                  draggable={true}
                  onDragStart={(e) => onDragStart(e, NewWidgetGauge)}
                  unselectable="on"
                >
                  <GridOnIcon />
                </IconButton>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Category2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid xs="auto" padding={0}>
                <IconButton
                  style={{ cursor: "grab" }}
                  draggable={true}
                  onDragStart={(e) => onDragStart(e, NewWidgetGrid)}
                  unselectable="on"
                >
                  <EqualizerIcon />
                </IconButton>
              </Grid>
              <Grid xs="auto" padding={0}>
                <IconButton
                  style={{ cursor: "grab" }}
                  draggable={true}
                  onDragStart={(e) => onDragStart(e, NewWidgetChart)}
                  unselectable="on"
                >
                  <ArticleIcon />
                </IconButton>
              </Grid>
              <Grid xs="auto" padding={0}>
                <IconButton
                  style={{ cursor: "grab" }}
                  draggable={true}
                  onDragStart={(e) => onDragStart(e, NewWidgetGauge)}
                  unselectable="on"
                >
                  <GridOnIcon />
                </IconButton>
              </Grid>
              <Grid xs="auto" padding={0}>
                <IconButton
                  style={{ cursor: "grab" }}
                  draggable={true}
                  onDragStart={(e) => onDragStart(e, NewWidgetGrid)}
                  unselectable="on"
                >
                  <EqualizerIcon />
                </IconButton>
              </Grid>
              <Grid xs="auto" padding={0}>
                <IconButton
                  style={{ cursor: "grab" }}
                  draggable={true}
                  onDragStart={(e) => onDragStart(e, NewWidgetChart)}
                  unselectable="on"
                >
                  <ArticleIcon />
                </IconButton>
              </Grid>
              <Grid xs="auto" padding={0}>
                <IconButton
                  style={{ cursor: "grab" }}
                  draggable={true}
                  onDragStart={(e) => onDragStart(e, NewWidgetGauge)}
                  unselectable="on"
                >
                  <GridOnIcon />
                </IconButton>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion TransitionProps={{ unmountOnExit: true }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Category3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid xs="auto" padding={0}>
                <IconButton
                  style={{ cursor: "grab" }}
                  draggable={true}
                  onDragStart={(e) => onDragStart(e, NewWidgetGrid)}
                  unselectable="on"
                >
                  <EqualizerIcon />
                </IconButton>
              </Grid>
              <Grid xs="auto" padding={0}>
                <IconButton
                  style={{ cursor: "grab" }}
                  draggable={true}
                  onDragStart={(e) => onDragStart(e, NewWidgetChart)}
                  unselectable="on"
                >
                  <ArticleIcon />
                </IconButton>
              </Grid>
              <Grid xs="auto" padding={0}>
                <IconButton
                  style={{ cursor: "grab" }}
                  draggable={true}
                  onDragStart={(e) => onDragStart(e, NewWidgetGauge)}
                  unselectable="on"
                >
                  <GridOnIcon />
                </IconButton>
              </Grid>
              <Grid xs="auto" padding={0}>
                <IconButton
                  style={{ cursor: "grab" }}
                  draggable={true}
                  onDragStart={(e) => onDragStart(e, NewWidgetGrid)}
                  unselectable="on"
                >
                  <EqualizerIcon />
                </IconButton>
              </Grid>
              <Grid xs="auto" padding={0}>
                <IconButton
                  style={{ cursor: "grab" }}
                  draggable={true}
                  onDragStart={(e) => onDragStart(e, NewWidgetChart)}
                  unselectable="on"
                >
                  <ArticleIcon />
                </IconButton>
              </Grid>
              <Grid xs="auto" padding={0}>
                <IconButton
                  style={{ cursor: "grab" }}
                  draggable={true}
                  onDragStart={(e) => onDragStart(e, NewWidgetGauge)}
                  unselectable="on"
                >
                  <GridOnIcon />
                </IconButton>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </div>
    </Drawer>
  );
};
