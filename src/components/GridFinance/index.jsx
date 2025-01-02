import { AgChartsEnterpriseModule } from "ag-charts-enterprise";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  AllCommunityModule,
  ClientSideRowModelModule,
  ModuleRegistry,
} from "ag-grid-community";
import {
  AdvancedFilterModule,
  CellSelectionModule,
  ColumnMenuModule,
  ColumnsToolPanelModule,
  ContextMenuModule,
  ExcelExportModule,
  FiltersToolPanelModule,
  IntegratedChartsModule,
  RichSelectModule,
  RowGroupingModule,
  RowGroupingPanelModule,
  SetFilterModule,
  SparklinesModule,
  StatusBarModule,
} from "ag-grid-enterprise";
import { AgGridReact } from "ag-grid-react";

import { getData } from "./data";
import { TickerCellRenderer } from "./renderers/TickerCellRenderer";
import { sparklineTooltipRenderer } from "./renderers/sparklineTooltipRenderer";
import { grayTheme } from "../../../themes";

import styles from "./grid.finance.module.css";

const DEFAULT_UPDATE_INTERVAL = 60;
const PERCENTAGE_CHANGE = 20;

ModuleRegistry.registerModules([
  AllCommunityModule,
  ClientSideRowModelModule,
  AdvancedFilterModule,
  ColumnsToolPanelModule,
  ExcelExportModule,
  FiltersToolPanelModule,
  ColumnMenuModule,
  ContextMenuModule,
  CellSelectionModule,
  RowGroupingModule,
  RowGroupingPanelModule,
  SetFilterModule,
  RichSelectModule,
  StatusBarModule,
  IntegratedChartsModule.with(AgChartsEnterpriseModule),
  SparklinesModule.with(AgChartsEnterpriseModule),
]);

const numberFormatter = ({ value }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    maximumFractionDigits: 2,
  });
  return value == null ? "" : formatter.format(value);
};

export const GridFinance = ({
  gridHeight = null,
  updateInterval = DEFAULT_UPDATE_INTERVAL,
}) => {
  const [rowData, setRowData] = useState(getData());
  const gridRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRowData((rowData) =>
        rowData.map((item) => {
          const isRandomChance = Math.random() < 0.1;

          if (!isRandomChance) {
            return item;
          }
          const rnd = (Math.random() * PERCENTAGE_CHANGE) / 100;
          const change = Math.random() > 0.5 ? 1 - rnd : 1 + rnd;
          const price =
            item.price < 10
              ? item.price * change
              : // Increase price if it is too low, so it does not hang around 0
                Math.random() * 40 + 10;

          const timeline = item.timeline
            .slice(1, item.timeline.length)
            .concat(Number(price.toFixed(2)));

          return {
            ...item,
            price,
            timeline,
          };
        }),
      );
    }, updateInterval);

    return () => clearInterval(intervalId);
  }, [updateInterval]);

  const colDefs = useMemo(() => {
    return [
      {
        field: "ticker",
        cellRenderer: TickerCellRenderer,
      },
      {
        headerName: "Timeline",
        field: "timeline",
        sortable: false,
        filter: false,
        cellRenderer: "agSparklineCellRenderer",
        cellRendererParams: {
          sparklineOptions: {
            type: "bar",
            direction: "vertical",
            axis: {
              strokeWidth: 0,
            },
            tooltip: {
              renderer: sparklineTooltipRenderer,
            },
          },
        },
      },
      {
        field: "instrument",
        cellDataType: "text",
        type: "rightAligned",
        minWidth: 100,
        initialWidth: 100,
      },
      {
        colId: "p&l",
        headerName: "P&L",
        cellDataType: "number",
        filter: "agNumberColumnFilter",
        type: "rightAligned",
        cellRenderer: "agAnimateShowChangeCellRenderer",
        valueGetter: ({ data }) =>
          data && data.quantity * (data.price / data.purchasePrice),
        valueFormatter: numberFormatter,
        aggFunc: "sum",
        minWidth: 140,
        initialWidth: 140,
      },
      {
        colId: "totalValue",
        headerName: "Total Value",
        type: "rightAligned",
        cellDataType: "number",
        filter: "agNumberColumnFilter",
        valueGetter: ({ data }) => data && data.quantity * data.price,
        cellRenderer: "agAnimateShowChangeCellRenderer",
        valueFormatter: numberFormatter,
        aggFunc: "sum",
        minWidth: 160,
        initialWidth: 160,
      },
    ];
  }, []);

  const defaultColDef = useMemo(
    () => ({
      flex: 1,
      filter: true,
      enableRowGroup: true,
      enableValue: true,
    }),
    [],
  );

  const getRowId = useCallback(({ data: { ticker } }) => ticker, []);

  const statusBar = useMemo(
    () => ({
      statusPanels: [
        { statusPanel: "agTotalAndFilteredRowCountComponent" },
        { statusPanel: "agTotalRowCountComponent" },
        { statusPanel: "agFilteredRowCountComponent" },
        { statusPanel: "agSelectedRowCountComponent" },
        { statusPanel: "agAggregationComponent" },
      ],
    }),
    [],
  );

  return (
    <div
      style={gridHeight ? { height: gridHeight } : {}}
      className={`ag-theme-quartz-dark ${styles.grid} ${
        gridHeight ? "" : styles.gridHeight
      }`}
    >
      <h1 className="text-4xl text-neutral-200" style={{ marginBottom: 21 }}>
        Finance Dashboard
      </h1>
      <AgGridReact
        theme={grayTheme}
        chartThemes="ag-default-dark"
        ref={gridRef}
        getRowId={getRowId}
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        cellSelection={true}
        enableCharts
        rowGroupPanelShow="always"
        suppressAggFuncInHeader
        groupDefaultExpanded={-1}
        statusBar={statusBar}
      />
    </div>
  );
};

export default GridFinance;
