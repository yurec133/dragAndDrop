import React from "react";
import { widgets } from "./constants/widget";
import WidgetWrapper from "./components/widgetWrapper/WidgetWrapper";
import { Header } from "./components/header/Header";
import Grid from "@mui/material/Unstable_Grid2";
import { WidgetPanel } from "./components/widgetPanel/WidgetPanel";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./themes/styles/theme";
import { Container } from "./components/container/Container";
import {WidgetList} from "./components/list/widgetList/WidgetList";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        <Grid container spacing={2}>
          <WidgetList />
          <WidgetWrapper items={widgets} />
          <WidgetPanel />
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
