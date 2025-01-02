import { themeQuartz, iconSetQuartz } from "ag-grid-community";


export const strippedQuartz = themeQuartz.withParams({
  ...themeQuartz,
  oddRowBackgroundColor: "rgb(0, 0, 0, 0.07)",
});


export const greenOne = themeQuartz.withParams({
  accentColor: "#429356",
  backgroundColor: "#21222C",
  borderColor: "#429356",
  borderRadius: 0,
  browserColorScheme: "dark",
  cellHorizontalPaddingScale: 0.8,
  cellTextColor: "#50F178",
  columnBorder: true,
  fontFamily: {
    googleFont: "Lato",
  },
  fontSize: 12,
  foregroundColor: "#68FF8E",
  headerBackgroundColor: "#21222C",
  headerFontSize: 14,
  headerFontWeight: 700,
  headerTextColor: "#68FF8E",
  headerVerticalPaddingScale: 1.5,
  oddRowBackgroundColor: "#21222C",
  rangeSelectionBackgroundColor: "#FFFF0020",
  rangeSelectionBorderColor: "yellow",
  rangeSelectionBorderStyle: "dashed",
  rowBorder: true,
  rowVerticalPaddingScale: 1.5,
  sidePanelBorder: true,
  spacing: 4,
  wrapperBorder: true,
  wrapperBorderRadius: 0,
});

export const contrasted = themeQuartz.withParams({
  accentColor: "#15BDE8",
  backgroundColor: "#0C0C0D",
  borderColor: "#ffffff00",
  borderRadius: 20,
  browserColorScheme: "dark",
  cellHorizontalPaddingScale: 1,
  chromeBackgroundColor: {
    ref: "backgroundColor",
  },
  columnBorder: false,
  fontFamily: {
    googleFont: "Roboto",
  },
  fontSize: 16,
  foregroundColor: "#BBBEC9",
  headerBackgroundColor: "#182226",
  headerFontSize: 14,
  headerFontWeight: 500,
  headerTextColor: "#FFFFFF",
  headerVerticalPaddingScale: 0.9,
  iconSize: 20,
  rowBorder: false,
  rowVerticalPaddingScale: 1.2,
  sidePanelBorder: false,
  spacing: 8,
  wrapperBorder: false,
  wrapperBorderRadius: 0,
});

export const country = themeQuartz.withPart(iconSetQuartz).withParams({
  accentColor: "#0086F4",
  backgroundColor: "#F1EDE1",
  borderColor: "#98968F",
  borderRadius: 0,
  browserColorScheme: "light",
  chromeBackgroundColor: {
    ref: "backgroundColor",
  },
  fontFamily: {
    googleFont: "Pixelify Sans",
  },
  fontSize: 15,
  foregroundColor: "#605E57",
  headerBackgroundColor: "#E4DAD1",
  headerFontSize: 15,
  headerFontWeight: 700,
  headerTextColor: "#3C3A35",
  rowVerticalPaddingScale: 1.2,
  spacing: 5,
  wrapperBorderRadius: 0,
});

export const grayTheme = themeQuartz.withParams({
  backgroundColor: "#1f2836",
  browserColorScheme: "dark",
  chromeBackgroundColor: {
    ref: "foregroundColor",
    mix: 0.07,
    onto: "backgroundColor",
  },
  foregroundColor: "#FFF",
  headerFontSize: 14,
});
