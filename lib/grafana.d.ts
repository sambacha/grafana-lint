export interface Grafana {
    openapi:    string;
    info:       Info;
    paths:      Paths;
    components: Components;
}

export interface Components {
    schemas: Schemas;
}

export interface Schemas {
    Dashboard: Dashboard;
    Panel:     Panel;
    Target:    Target;
    Template:  Template;
}

export interface Dashboard {
    type:       TypeEnum;
    required:   string[];
    properties: DashboardProperties;
}

export interface DashboardProperties {
    annotations:   Annotations;
    description:   Description;
    editable:      Editable;
    graphTooltip:  GraphTooltip;
    id:            ID;
    panels:        PurplePanels;
    refresh:       Description;
    schemaVersion: GraphTooltip;
    style:         Style;
    tags:          Tags;
    templating:    Templating;
    time:          Time;
    timepicker:    Timepicker;
    timezone:      Description;
    title:         Description;
    uid:           Description;
    version:       ID;
}

export interface Annotations {
    type:       TypeEnum;
    properties: AnnotationsProperties;
}

export interface AnnotationsProperties {
    list: PurpleList;
}

export interface PurpleList {
    title: string;
    type:  TypeEnum;
    items: ListItems;
}

export interface ListItems {
    type:       TypeEnum;
    properties: PurpleProperties;
}

export interface PurpleProperties {
    builtIn:    BuiltIn;
    datasource: Style;
    enable:     Editable;
    hide:       Editable;
    iconColor:  Description;
    name:       Description;
    rawQuery:   Description;
    showIn:     GraphTooltip;
}

export interface BuiltIn {
    type:     TypeEnum;
    default:  number;
    readOnly: boolean;
}

export enum TypeEnum {
    Array = "array",
    Boolean = "boolean",
    Integer = "integer",
    Object = "object",
    String = "string",
}

export interface Style {
    type:    TypeEnum;
    default: string;
}

export interface Editable {
    type:    TypeEnum;
    default: boolean;
}

export interface Description {
    type: TypeEnum;
}

export interface GraphTooltip {
    type:    TypeEnum;
    default: number;
}

export interface ID {
    type:     TypeEnum;
    readOnly: boolean;
}

export interface PurplePanels {
    type:     TypeEnum;
    items:    Description;
    readOnly: boolean;
}

export interface Tags {
    type:    TypeEnum;
    items:   Description;
    default: string[];
}

export interface Templating {
    type:       TypeEnum;
    properties: TemplatingProperties;
}

export interface TemplatingProperties {
    list: FluffyList;
}

export interface FluffyList {
    title: string;
    type:  TypeEnum;
    items: Description;
}

export interface Time {
    type:       TypeEnum;
    properties: TimeProperties;
    default:    Default;
}

export interface Default {
    from: string;
    to:   string;
}

export interface TimeProperties {
    from: Style;
    to:   Style;
}

export interface Timepicker {
    type:       TypeEnum;
    properties: TimepickerProperties;
}

export interface TimepickerProperties {
    hidden:            Editable;
    refresh_intervals: Tags;
}

export interface Panel {
    type:       TypeEnum;
    properties: PanelProperties;
}

export interface PanelProperties {
    Gauge: Gauge;
    Graph: Graph;
    Row:   Row;
    Stat:  Stat;
    Table: Table;
    Text:  Gauge;
}

export interface Gauge {
    allOf: GaugeAllOf[];
}

export interface GaugeAllOf {
    type:       TypeEnum;
    properties: FluffyProperties;
}

export interface FluffyProperties {
    datasource?:      Style;
    description?:     Description;
    gridPos?:         GridPos;
    links?:           Links;
    repeat?:          Description;
    repeatDirection?: Description;
    targets?:         TagsClass;
    title?:           Description;
    transparent?:     Editable;
    fieldConfig?:     PurpleFieldConfig;
    options?:         PurpleOptions;
    type?:            TypeClass;
    content?:         Description;
    mode?:            Style;
}

export interface PurpleFieldConfig {
    type:       TypeEnum;
    properties: TentacledProperties;
}

export interface TentacledProperties {
    defaults:  PurpleDefaults;
    overrides: Overrides;
}

export interface PurpleDefaults {
    type:       TypeEnum;
    properties: StickyProperties;
}

export interface StickyProperties {
    custom:     PurpleCustom;
    links:      Links;
    mappings:   Mappings;
    max:        Description;
    min:        Description;
    thresholds: Thresholds;
    unit:       Description;
}

export interface PurpleCustom {
    type:    TypeEnum;
    default: Paths;
}

export interface Paths {
}

export interface Links {
    title: string;
    type:  TypeEnum;
    items: LinksItems;
}

export interface LinksItems {
    type:       TypeEnum;
    properties: IndigoProperties;
}

export interface IndigoProperties {
    targetBlank: Editable;
    title:       Description;
    url:         Description;
}

export interface Mappings {
    type:  TypeEnum;
    items: MappingsItems;
}

export interface MappingsItems {
    type:       TypeEnum;
    properties: IndecentProperties;
}

export interface IndecentProperties {
    id:       Description;
    from:     Description;
    operator: Description;
    to:       Description;
    text:     Description;
    type:     Description;
    value:    Description;
}

export interface Thresholds {
    type:       TypeEnum;
    properties: ThresholdsProperties;
}

export interface ThresholdsProperties {
    mode:  Mode;
    steps: Steps;
}

export interface Mode {
    title:   string;
    type:    TypeEnum;
    default: string;
}

export interface Steps {
    title: string;
    type:  TypeEnum;
    items: StepsItems;
}

export interface StepsItems {
    type:       TypeEnum;
    properties: HilariousProperties;
}

export interface HilariousProperties {
    color: Description;
    value: Description;
}

export interface Overrides {
    type:  TypeEnum;
    items: OverridesItems;
}

export interface OverridesItems {
    type:       TypeEnum;
    properties: AmbitiousProperties;
}

export interface AmbitiousProperties {
    matcher:    Matcher;
    properties: PropertiesProperties;
}

export interface Matcher {
    type:       string;
    properties: MatcherProperties;
}

export interface MatcherProperties {
    id:      Description;
    options: Description;
}

export interface PropertiesProperties {
    type:  TypeEnum;
    items: PropertiesItems;
}

export interface PropertiesItems {
    type:       TypeEnum;
    properties: CunningProperties;
}

export interface CunningProperties {
    id:    Description;
    value: Description;
}

export interface GridPos {
    type:       TypeEnum;
    properties: GridPosProperties;
}

export interface GridPosProperties {
    h: DashLength;
    w: DashLength;
    x: Decimals;
    y: Decimals;
}

export interface DashLength {
    type:        TypeEnum;
    default:     number;
    description: string;
}

export interface Decimals {
    type:        TypeEnum;
    description: string;
}

export interface PurpleOptions {
    type:       TypeEnum;
    properties: MagentaProperties;
}

export interface MagentaProperties {
    orientation:          Style;
    reduceOptions:        ReduceOptions;
    showThresholdLabels:  Editable;
    showThresholdMarkers: Editable;
}

export interface ReduceOptions {
    type:       TypeEnum;
    properties: ReduceOptionsProperties;
}

export interface ReduceOptionsProperties {
    calcs:  Tags;
    fields: Description;
    values: Editable;
}

export interface TagsClass {
    type:  TypeEnum;
    items: Description;
}

export interface TypeClass {
    type:     TypeEnum;
    default:  string;
    readOnly: boolean;
}

export interface Graph {
    allOf: GraphAllOf[];
}

export interface GraphAllOf {
    type:       TypeEnum;
    properties: FriskyProperties;
}

export interface FriskyProperties {
    datasource?:      Style;
    description?:     Description;
    gridPos?:         GridPos;
    links?:           Links;
    repeat?:          Description;
    repeatDirection?: Description;
    targets?:         TagsClass;
    title?:           Description;
    transparent?:     Editable;
    bars?:            Bars;
    dashLength?:      DashLength;
    dashes?:          Bars;
    decimals?:        Decimals;
    fieldConfig?:     FluffyFieldConfig;
    fill?:            DashLength;
    fillGradient?:    DashLength;
    hiddenSeries?:    Bars;
    legend?:          Legend;
    lines?:           Bars;
    linewidth?:       DashLength;
    nullPointMode?:   NullPointMode;
    options?:         FluffyOptions;
    percentage?:      Bars;
    pointradius?:     Decimals;
    points?:          Bars;
    renderer?:        TypeClass;
    seriesOverrides?: SeriesOverrides;
    spaceLength?:     DashLength;
    stack?:           Bars;
    steppedLine?:     Bars;
    thresholds?:      Thresholds;
    timeFrom?:        Description;
    timeRegions?:     Description;
    timeShift?:       Description;
    tooltip?:         Tooltip;
    type?:            TypeClass;
    xaxis?:           Xaxis;
    yaxes?:           Yaxes;
    yaxis?:           Yaxis;
}

export interface Bars {
    type:        TypeEnum;
    default:     boolean;
    description: string;
}

export interface FluffyFieldConfig {
    type:       TypeEnum;
    properties: MischievousProperties;
}

export interface MischievousProperties {
    defaults:  FluffyDefaults;
    overrides: Overrides;
}

export interface FluffyDefaults {
    type:       TypeEnum;
    properties: BraggadociousProperties;
}

export interface BraggadociousProperties {
    custom: PurpleCustom;
}

export interface Legend {
    type:       TypeEnum;
    properties: LegendProperties;
}

export interface LegendProperties {
    alignAsTable: Decimals;
    avg:          Bars;
    current:      Bars;
    max:          Bars;
    min:          Bars;
    rightSide:    Bars;
    show:         Bars;
    sideWidth:    Decimals;
    total:        Bars;
    values:       Editable;
}

export interface NullPointMode {
    type:        TypeEnum;
    default:     string;
    description: string;
}

export interface FluffyOptions {
    type:       TypeEnum;
    properties: Properties1;
}

export interface Properties1 {
    dataLinks: DataLinks;
}

export interface DataLinks {
    type:  TypeEnum;
    items: LinksItems;
}

export interface SeriesOverrides {
    type:        TypeEnum;
    description: string;
    items:       SeriesOverridesItems;
}

export interface SeriesOverridesItems {
    type:       TypeEnum;
    properties: Properties2;
}

export interface Properties2 {
    alias:         Decimals;
    bars:          Description;
    lines:         Description;
    fill:          Description;
    fillGradient:  Description;
    linewidth:     Description;
    nullPointMode: Description;
    fillBelowTo:   Description;
    steppedLine:   Description;
    dashes:        Description;
    hiddenSeries:  Description;
    dashLength:    Description;
    spaceLength:   Description;
    points:        Description;
    pointradius:   Description;
    stack:         Description;
    color:         Description;
    yaxis:         Description;
    zindex:        Description;
    transform:     Description;
    legend:        Description;
    hideTooltip:   Description;
}

export interface Tooltip {
    type:       TypeEnum;
    properties: TooltipProperties;
}

export interface TooltipProperties {
    shared:     Bars;
    sort:       DashLength;
    value_type: TypeClass;
}

export interface Xaxis {
    type:       TypeEnum;
    properties: XaxisProperties;
}

export interface XaxisProperties {
    buckets: Description;
    mode:    NullPointMode;
    name:    Description;
    show:    Bars;
    values:  Values;
}

export interface Values {
    type:    TypeEnum;
    default: any[];
}

export interface Yaxes {
    type:  TypeEnum;
    items: YaxesItems;
}

export interface YaxesItems {
    type:       TypeEnum;
    properties: Properties3;
}

export interface Properties3 {
    decimals: Decimals;
    format:   NullPointMode;
    label:    Decimals;
    logBase:  DashLength;
    max:      Decimals;
    min:      Decimals;
    show:     Bars;
}

export interface Yaxis {
    type:       TypeEnum;
    properties: YaxisProperties;
}

export interface YaxisProperties {
    align:      Bars;
    alignLevel: DashLength;
}

export interface Row {
    type:       TypeEnum;
    properties: RowProperties;
}

export interface RowProperties {
    collapse:        Editable;
    collapsed:       Editable;
    datasource:      Description;
    gridPos:         GridPos;
    panels:          TagsClass;
    repeat:          Description;
    repeatIteration: Description;
    repeatRowId:     ID;
    showTitle:       Editable;
    title:           Description;
    titleSize:       Style;
    type:            TypeClass;
}

export interface Stat {
    allOf: StatAllOf[];
}

export interface StatAllOf {
    type:       TypeEnum;
    properties: Properties4;
}

export interface Properties4 {
    datasource?:      Style;
    description?:     Description;
    gridPos?:         GridPos;
    links?:           Links;
    repeat?:          Description;
    repeatDirection?: Description;
    targets?:         TagsClass;
    title?:           Description;
    transparent?:     Editable;
    fieldConfig?:     PurpleFieldConfig;
    options?:         TentacledOptions;
    type?:            TypeClass;
}

export interface TentacledOptions {
    type:       TypeEnum;
    properties: Properties5;
}

export interface Properties5 {
    colorMode:     Style;
    graphMode:     Style;
    justifyMode:   Style;
    orientation:   Style;
    reduceOptions: ReduceOptions;
    textMode:      Style;
}

export interface Table {
    allOf: TableAllOf[];
}

export interface TableAllOf {
    type:       TypeEnum;
    properties: Properties6;
}

export interface Properties6 {
    datasource?:      Style;
    description?:     Description;
    gridPos?:         GridPos;
    links?:           Links;
    repeat?:          Description;
    repeatDirection?: Description;
    targets?:         TagsClass;
    title?:           Description;
    transparent?:     Editable;
    fieldConfig?:     TentacledFieldConfig;
    options?:         StickyOptions;
    type?:            TypeClass;
}

export interface TentacledFieldConfig {
    type:       TypeEnum;
    properties: Properties7;
}

export interface Properties7 {
    defaults:  TentacledDefaults;
    overrides: Overrides;
}

export interface TentacledDefaults {
    type:       TypeEnum;
    properties: Properties8;
}

export interface Properties8 {
    custom:      FluffyCustom;
    displayName: Description;
    links:       Links;
    mappings:    Mappings;
    max:         Description;
    min:         Description;
    noValue:     Description;
    thresholds:  Thresholds;
    unit:        Style;
}

export interface FluffyCustom {
    type:       TypeEnum;
    properties: CustomProperties;
}

export interface CustomProperties {
    width: Description;
}

export interface StickyOptions {
    type:       TypeEnum;
    properties: Properties9;
}

export interface Properties9 {
    showHeader: Editable;
}

export interface Target {
    type:       TypeEnum;
    properties: TargetProperties;
}

export interface TargetProperties {
    Prometheus: Prometheus;
}

export interface Prometheus {
    type:       TypeEnum;
    required:   string[];
    properties: PrometheusProperties;
}

export interface PrometheusProperties {
    datasource:     Style;
    expr:           Description;
    format:         Style;
    legendFormat:   Description;
    interval:       Description;
    intervalFactor: Description;
    instant:        Description;
    refId:          ID;
}

export interface Template {
    type:       TypeEnum;
    properties: TemplateProperties;
}

export interface TemplateProperties {
    Custom:     Custom;
    Datasource: Datasource;
    Query:      Query;
}

export interface Custom {
    type:       TypeEnum;
    properties: CustomPropertiesClass;
}

export interface CustomPropertiesClass {
    allValue?:   Description;
    current:     ItemsClass;
    hide:        GraphTooltip;
    includeAll:  Editable;
    label:       Description;
    multi:       Editable;
    name:        Description;
    options:     Description;
    query:       Description;
    queryValue?: Style;
    skipUrlSync: Editable;
    type:        TypeClass;
    refresh?:    GraphTooltip;
    regex?:      Description;
}

export interface ItemsClass {
    type:       TypeEnum;
    properties: Properties10;
}

export interface Properties10 {
    selected: Editable;
    text:     Description;
    value:    Description;
}

export interface Datasource {
    type:       TypeEnum;
    required:   string[];
    properties: CustomPropertiesClass;
}

export interface Query {
    type:       TypeEnum;
    required:   string[];
    properties: QueryProperties;
}

export interface QueryProperties {
    allValue:       Description;
    current:        PurpleCurrent;
    datasource:     Description;
    definition:     Description;
    hide:           GraphTooltip;
    includeAll:     Editable;
    label:          Description;
    multi:          Editable;
    name:           Description;
    options:        IndigoOptions;
    query:          Description;
    refresh:        GraphTooltip;
    regex:          Description;
    skipUrlSync:    Editable;
    sort:           GraphTooltip;
    tagValuesQuery: Description;
    tags:           TagsClass;
    tagsQuery:      Description;
    type:           TypeClass;
    useTags:        Editable;
}

export interface PurpleCurrent {
    type:       TypeEnum;
    properties: Properties11;
}

export interface Properties11 {
    selected: Description;
    text:     Description;
    value:    Description;
}

export interface IndigoOptions {
    type:  TypeEnum;
    items: ItemsClass;
}

export interface Info {
    title:   string;
    version: string;
}
