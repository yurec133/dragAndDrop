import React, { useCallback, useContext, useMemo} from "react";
import "./style.css";
import { WidthProvider, Layout, Responsive, Layouts } from "react-grid-layout";
import {
  INewWidget,
  IWidget,
  IWidgetModal,
  LAYOUTS,
  WIDGETITEMS,
  WIDGETLAYOUTS,
} from "../../constants/widget";
import FullScreenDialog from "../dialog/Dialog";
import { v4 as uuidv4 } from "uuid";
import Widget from "../widget/Widget";
import {
  getFromItemsLS,
  getLayoutFromLS,
  setItemsLS,
  setLayoutToLS,
} from "../../utils/ls";
import { DrawerNavContext } from "../../contexts/drawerNav-context";
import { Main } from "../../utils/drawerStyled";

const ResponsiveGridLayout = WidthProvider(Responsive);

type Props = {
  className?: string;
  cols?: { [x: string]: number };
  items: IWidget[];
  rowHeight?: number;
};

const WidgetWrapper = ({
  cols = { lg: 4, md: 4, sm: 3, xs: 2, xxs: 1 },
  items = [],
  rowHeight = 320,
}: Props) => {
  const { updateConfigWidget, openWidget, breakpoint, openNav } =
    useContext(DrawerNavContext);
  const [itemsWidget, setItemsWidget] = React.useState<IWidget[]>(
    getFromItemsLS(WIDGETITEMS, items)
  );
  const layoutFromItems = useMemo(() => generateLayout(), []);
  const originalLayouts =
    getLayoutFromLS(LAYOUTS, WIDGETLAYOUTS, layoutFromItems) || {};
  const [idItem, setIdItem] = React.useState<string>("0");
  const [layouts, setLayouts] = React.useState<Layouts>(originalLayouts);
  const [breakpointLayout, setBreakpointLayout] = React.useState<string>("lg");
  const [open, setOpen] = React.useState(false);
  const [isOverlap, setIsOverlap] = React.useState(false);
  const [contentModal, setContentModal] = React.useState<IWidgetModal>({
    id: "",
    title: "",
    content: "",
  });
  const currentLayout = useMemo(
    () => getCurrentLayout(idItem),
    [idItem, layouts]
  );

  React.useEffect(() => {
    setItemsLS(itemsWidget);
  }, [itemsWidget]);

  React.useEffect(() => {
    if (openWidget && currentLayout[0] !== undefined) {
      updateConfigWidget(currentLayout[0]);
    }
  }, [idItem, layouts]);
  const handleRemoveItem = useCallback((id: string) => {
    setItemsWidget((current: IWidget[]) => {
      if(current.length < 2) return current
      return current.filter((item) => {
        return item.id !== id;
      });
    });
  }, []);
  const handleAddItem = (obj: INewWidget, item: Layout) => {
    const idItem = uuidv4();
    setLayouts((current: Layouts) => {
      const prevObj = { ...current };
      const arr = [
        {
          h: item.h,
          i: idItem,
          w: item.w,
          x: item.x,
          y: item.y,
        },
        ...prevObj[breakpointLayout],
      ];
      const newLayouts = { [breakpointLayout]: [...arr] };
      return {
        ...current,
        ...newLayouts,
      };
    });
    setItemsWidget((current: IWidget[]) => [
      {
        id: idItem,
        title: obj.title,
        content: obj.content,
        config: {
          x: item.x,
          y: item.y,
          h: item.h,
          w: item.w,
        },
      },
      ...current,
    ]);
  };
  const handleOpen = useCallback((items: IWidgetModal) => {
    setOpen(true);
    setContentModal(items);
  }, []);

  const handleClose = () => setOpen(false);

  function getCurrentLayout(id: string) {
    if (!openWidget) return [];
    return layouts[breakpointLayout].filter((item: Layout) => {
      return item.i === id;
    });
  }

  function generateLayout() {
    return itemsWidget.map((item: IWidget) => {
      return {
        ...item.config,
        i: item.id,
      };
    });
  }

  const handleOnClick = (id: string) => {
    openWidget && setIdItem(id);
  };

  const generateDOM = useMemo(() => {
    return itemsWidget.map((item: IWidget) => (
      <div
        className="grid-item"
        key={item.id}
        onClick={() => handleOnClick(item.id)}
      >
        <Widget
          handleOpen={handleOpen}
          handleRemoveItem={handleRemoveItem}
          item={item}
        />
      </div>
    ));
  }, [itemsWidget]);

  const onDrop = (
    layout: Layout[],
    item: Layout,
    e: DragEvent,
    handleAddItem: (obj: INewWidget, item: Layout) => void
  ) => {
    if (e.dataTransfer) {
      const data = e.dataTransfer.getData("itemWidget");
      const objWidget = JSON.parse(data);
      handleAddItem(objWidget, item);
    }
    setIsOverlap(false)
  };

  const onDropDragOver = () => {
    setIsOverlap(true)
    return { w: 1, h: 1 };
  };

  const handleOnLayoutChange = (layout: Layout[], layouts: Layouts) => {
    setTimeout(() => {
      setLayouts(layouts);
    }, 300);
    setLayoutToLS(LAYOUTS, layouts, WIDGETLAYOUTS);
  };

  return (
    <Main open={openNav} openRight={openWidget}>
      <div
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          width: `${breakpoint ? breakpoint : "auto"}`,
        }}
      >
        <ResponsiveGridLayout
          cols={cols}
          layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          onLayoutChange={handleOnLayoutChange}
          margin={[0, 0]}
          useCSSTransforms={true}
          rowHeight={rowHeight}
          onDrop={(layout: Layout[], item: Layout, e: DragEvent) =>
            onDrop(layout, item, e, handleAddItem)
          }
          isDroppable={true}
          onDropDragOver={onDropDragOver}
          onBreakpointChange={(newBreakpoint: string) =>
            setBreakpointLayout(newBreakpoint)
          }
          compactType={'horizontal'}
          allowOverlap={isOverlap}
        >
          {generateDOM}
        </ResponsiveGridLayout>
      </div>
      <FullScreenDialog
        handleClose={handleClose}
        open={open}
        items={contentModal}
      />
    </Main>
  );
};

export default WidgetWrapper;
