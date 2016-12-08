import { NgModule } from "@angular/core";

import { ChartComponent } from "./charts/chart.component";
import { 
  ScaleLegendComponent, LegendComponent, LegendEntryComponent, AdvancedLegendComponent 
} from "./legend";
import { AxesModule } from "./axes/axes.module";
import { TooltipModule } from "./tooltip";
import { CircleSeriesComponent } from "./circle-series.component";
import { CircleComponent } from "./circle.component";
import { GridPanelComponent } from "./grid-panel.component";
import { GridPanelSeriesComponent } from "./grid-panel-series.component";
import { SvgLinearGradientComponent } from "./svg-linear-gradient.component";
import { SvgRadialGradientComponent } from "./svg-radial-gradient.component";
import { Timeline } from "./timeline.component";
import { CommonModule } from "@angular/common";
import { AreaComponent } from "./area.component";
import { AreaTooltip } from "./area-tooltip.component";
import { CountUpDirective } from './count';

const COMPONENTS = [
  AreaComponent,
  CountUpDirective,
  AreaTooltip,
  ChartComponent,
  LegendComponent,
  LegendEntryComponent,
  ScaleLegendComponent,
  CircleComponent,
  CircleSeriesComponent,
  GridPanelComponent,
  GridPanelSeriesComponent,
  SvgLinearGradientComponent,
  SvgRadialGradientComponent,
  Timeline,
  AdvancedLegendComponent
];

@NgModule({
  imports: [
    CommonModule,
    AxesModule,
    TooltipModule
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    CommonModule,
    AxesModule,
    TooltipModule,
    ...COMPONENTS
  ]
})
export class ChartCommonModule {
}
