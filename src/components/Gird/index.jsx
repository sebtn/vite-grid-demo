import "ag-grid-enterprise";
import React, { useState, useRef, useCallback } from "react";
import {
  ModuleRegistry,
  AllCommunityModule,
  themeAlpine,
  themeBalham,
} from "ag-grid-community";
import {
  ColumnsToolPanelModule,
  FiltersToolPanelModule,
  PivotModule,
  SideBarModule,
  RowGroupingPanelModule,
} from "ag-grid-enterprise";
import { AgGridReact } from "ag-grid-react";

import {
  greenOne,
  contrasted,
  country,
  grayTheme,
  strippedQuartz,
} from "../../../themes";

import styles from "./grid.module.css";

ModuleRegistry.registerModules([
  AllCommunityModule,
  SideBarModule,
  ColumnsToolPanelModule,
  FiltersToolPanelModule,
  PivotModule,
  RowGroupingPanelModule,
]);

const themes = [
  { id: "Dark", theme: grayTheme },
  { id: "Quartz", theme: strippedQuartz },
  { id: "Balham", theme: themeBalham },
  { id: "Alpine", theme: themeAlpine },
  { id: "CMD command line", theme: greenOne },
  { id: "Contrasted", theme: contrasted },
  { id: "Country", theme: country },
];

const paginationPageSize = 50;
const paginationPageSizeSelector = [50, 100, 200, 500, 1000];

const rowSelection = {
  mode: "multiRow",
  headerCheckbox: false,
};

const Grid = () => {
  const [theme, setBaseTheme] = useState(themes[0]);
  const [rowData, setRowData] = useState();
  const gridRef = useRef(null);

  const onGridReady = useCallback(() => {
    fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  }, []);

  const onExportCsv = useCallback(() => {
    gridRef.current.api.exportDataAsCsv();
  }, []);

  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setGridOption(
      "quickFilterText",
      document.getElementById("filter-text-box").value
    );
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-neutral-200">Dashboard</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 35,
          marginTop: 21,
        }}
      >
        <p>
          <span>Theme: </span>
          <PartSelector
            options={themes}
            value={theme}
            setValue={setBaseTheme}
          />
        </p>

        <div>
          <span>Quick Filter: </span>
          <input
            style={{ padding: 7 }}
            type="text"
            id="filter-text-box"
            placeholder="Filter..."
            onInput={onFilterTextBoxChanged}
          />
        </div>

        <div>
          <button
            className="ext-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-80"
            onClick={onExportCsv}
            style={{ padding: 7 }}
          >
            Download CSV file
          </button>
        </div>
      </div>
      <div
        style={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          marginTop: 21,
        }}
      >
        <div style={{ flex: 1 }}>
          <AgGridReact
            ref={gridRef}
            theme={theme.theme}
            columnDefs={columnDefs}
            rowData={rowData}
            onGridReady={onGridReady}
            defaultColDef={defaultColDef}
            rowGroupPanelShow={"multipleColumns"}
            rowSelection={rowSelection}
            paginationPageSize={paginationPageSize}
            paginationPageSizeSelector={paginationPageSizeSelector}
            pagination
            suppressExcelExport
            sideBar
          />
        </div>
      </div>
    </div>
  );
};

const PartSelector = ({ options, value, setValue }) => (
  <select
    onChange={(e) =>
      setValue(options.find((t) => t?.id === e.currentTarget.value) || null)
    }
    className={styles.minimal}
    value={value?.id}
  >
    {options.map((option, i) => (
      <option key={i} value={option?.id}>
        {option?.variant || option?.id || "(unchanged)"}
      </option>
    ))}
  </select>
);

const columnDefs = [
  {
    headerName: "ID",
    enableRowGroup: true,
    field: "id",
    width: 70,
    hide: true,
  },
  {
    headerName: "Athlete",
    enableRowGroup: true,
    field: "athlete",
    width: 150,
    editable: true,
  },
  {
    headerName: "Age",
    enableRowGroup: true,
    field: "age",
    width: 90,
    minWidth: 50,
    maxWidth: 100,
    editable: true,
  },
  {
    headerName: "Country",
    enableRowGroup: true,
    field: "country",
    width: 120,
  },
  {
    headerName: "Year",
    enableRowGroup: true,
    field: "year",
    width: 90,
  },
  {
    headerName: "Date",
    enableRowGroup: true,
    field: "date",
    width: 110,
  },
  {
    headerName: "Sport",
    enableRowGroup: true,
    field: "sport",
    width: 110,
  },
  {
    headerName: "Gold",
    enableRowGroup: true,
    field: "gold",
    width: 100,
  },
  {
    headerName: "Silver",
    enableRowGroup: true,
    field: "silver",
    width: 100,
  },
  {
    headerName: "Bronze",
    enableRowGroup: true,
    field: "bronze",
    width: 100,
  },
  {
    headerName: "Total",
    enableRowGroup: true,
    field: "total",
    width: 100,
  },
];

const defaultColDef = {
  editable: true,
  flex: 1,
  minWidth: 100,
  filter: true,
};

export default Grid;
