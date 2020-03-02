declare interface ITabsWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  TextEditorGroupName: string;
  LayoutGroupName: string;
  DescriptionFieldLabel: string;
  Inline: string;
  ManageTabs: string;
  Tabs: string;
  DisableColor: string;
  ActiveColor: string;
  SelectedColor: string;
  TabHeaderTextColor: string;
  TabFont: string;
  TabFontSize: string;
  ErrorClassicSharePoint: string;
}

declare module 'TabsWebPartStrings' {
  const strings: ITabsWebPartStrings;
  export = strings;
}
