const chartGroups = [
  {
    name: 'Bar Charts',
    charts: [
      {
        name: 'Vertical Bar Chart',
        selector: 'bar-vertical',
        inputFormat: 'singleSeries',
        options: [
          'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient', 'barPadding',
          'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel',
          'showGridLines', 'roundDomains', 'tooltipDisabled'
        ]
      },
      {
        name: 'Horizontal Bar Chart',
        selector: 'bar-horizontal',
        inputFormat: 'singleSeries',
        options: [
          'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient', 'barPadding',
          'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel',
          'showGridLines', 'roundDomains', 'tooltipDisabled'
        ],
        defaults: {
          yAxisLabel: 'Country',
          xAxisLabel: 'GDP Per Capita',
        }
      },
      {
        name: 'Grouped Vertical Bar Chart',
        selector: 'bar-vertical-2d',
        inputFormat: 'multiSeries',
        options: [
          'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient', 'barPadding', 'groupPadding',
          'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel',
          'showGridLines', 'roundDomains', 'tooltipDisabled'
        ]
      },
      {
        name: 'Grouped Horizontal Bar Chart',
        selector: 'bar-horizontal-2d',
        inputFormat: 'multiSeries',
        options: [
          'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient', 'barPadding', 'groupPadding',
          'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel',
          'showGridLines', 'roundDomains', 'tooltipDisabled'
        ],
        defaults: {
          yAxisLabel: 'Country',
          xAxisLabel: 'GDP Per Capita',
        }
      },
      {
        name: 'Stacked Vertical Bar Chart',
        selector: 'bar-vertical-stacked',
        inputFormat: 'multiSeries',
        options: [
          'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient', 'barPadding',
          'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel',
          'showGridLines', 'roundDomains', 'tooltipDisabled'
        ]
      },
      {
        name: 'Stacked Horizontal Bar Chart',
        selector: 'bar-horizontal-stacked',
        inputFormat: 'multiSeries',
        options: [
          'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient', 'barPadding',
          'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel',
          'showGridLines', 'roundDomains', 'tooltipDisabled'
        ],
        defaults: {
          yAxisLabel: 'Country',
          xAxisLabel: 'GDP Per Capita',
        }
      },
      {
        name: 'Normalized Vertical Bar Chart',
        selector: 'bar-vertical-normalized',
        inputFormat: 'multiSeries',
        options: [
          'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient', 'barPadding',
          'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel',
          'showGridLines', 'roundDomains', 'tooltipDisabled'
        ],
        defaults: {
          yAxisLabel: 'Normalized GDP Per Capita',
          xAxisLabel: 'Country',
        }
      },
      {
        name: 'Normalized Horizontal Bar Chart',
        selector: 'bar-horizontal-normalized',
        inputFormat: 'multiSeries',
        options: [
          'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient', 'barPadding',
          'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel',
          'showGridLines', 'roundDomains', 'tooltipDisabled'
        ],
        defaults: {
          yAxisLabel: 'Country',
          xAxisLabel: 'Normalized GDP Per Capita',
        }
      }
    ]
  },
  {
    name: 'Pie Charts',
    charts: [
      {
        name: 'Pie Chart',
        selector: 'pie-chart',
        inputFormat: 'singleSeries',
        options: [
          'colorScheme', 'gradient', 'showLegend', 'legendTitle', 'doughnut', 'arcWidth',
          'explodeSlices', 'showLabels', 'tooltipDisabled'
        ]
      },
      {
        name: 'Advanced Pie Chart',
        selector: 'advanced-pie-chart',
        inputFormat: 'singleSeries',
        options: ['colorScheme', 'gradient', 'tooltipDisabled']
      },
      {
        name: 'Pie Grid',
        selector: 'pie-grid',
        inputFormat: 'singleSeries',
        options: ['colorScheme', 'tooltipDisabled']
      }
    ]
  },
  {
    name: 'Line/Area Charts',
    charts: [
      {
        name: 'Line Chart',
        selector: 'line-chart',
        inputFormat: 'multiSeries',
        options: [
          'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient',
          'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel',
          'yAxisLabel', 'autoScale', 'timeline', 'showGridLines', 'curve',
          'rangeFillOpacity', 'roundDomains', 'tooltipDisabled'
        ],
        defaults: {
          yAxisLabel: 'GDP Per Capita',
          xAxisLabel: 'Census Date',
          linearScale: true
        }
      },
      {
        name: 'Polar Chart',
        selector: 'polar-chart',
        inputFormat: 'multiSeries',
        options: [
          'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient',
          'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel',
          'yAxisLabel', 'autoScale', 'showGridLines', 'curveClosed',
          'roundDomains', 'tooltipDisabled'
        ],
        defaults: {
          yAxisLabel: 'GDP Per Capita',
          xAxisLabel: 'Census Date',
          linearScale: true
        }
      },
      {
        name: 'Area Chart',
        selector: 'area-chart',
        inputFormat: 'multiSeries',
        options: [
          'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient',
          'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel',
          'yAxisLabel', 'autoScale', 'timeline', 'showGridLines', 'curve',
          'roundDomains', 'tooltipDisabled'
        ],
        defaults: {
          yAxisLabel: 'GDP Per Capita',
          xAxisLabel: 'Census Date',
          linearScale: true
        }
      },
      {
        name: 'Stacked Area Chart',
        selector: 'area-chart-stacked',
        inputFormat: 'multiSeries',
        options: [
          'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient',
          'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel',
          'yAxisLabel', 'autoScale', 'timeline', 'showGridLines', 'curve',
          'roundDomains', 'tooltipDisabled'
        ],
        defaults: {
          yAxisLabel: 'GDP Per Capita',
          xAxisLabel: 'Census Date',
          linearScale: true
        }
      },
      {
        name: 'Normalized Area Chart',
        selector: 'area-chart-normalized',
        inputFormat: 'multiSeries',
        options: [
          'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient',
          'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel',
          'yAxisLabel', 'autoScale', 'timeline', 'showGridLines', 'curve',
          'roundDomains', 'tooltipDisabled'
        ],
        defaults: {
          yAxisLabel: 'Normalized GDP Per Capita',
          xAxisLabel: 'Census Date',
          linearScale: true
        }
      },
    ]
  },
  {
    name: 'Other Charts',
    charts: [
      {
        name: 'Bubble Chart',
        selector: 'bubble-chart',
        inputFormat: 'bubble',
        options: [
          'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'showLegend', 'legendTitle',
          'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel', 'showGridLines',
          'roundDomains', 'autoScale', 'minRadius', 'maxRadius', 'tooltipDisabled'
        ],
        defaults: {
          xAxisLabel: 'Census Date',
          yAxisLabel: 'Life expectancy [years]'
        }
      },
      {
        name: 'Force Directed Graph',
        selector: 'force-directed-graph',
        inputFormat: 'graph',
        options: ['colorScheme', 'showLegend', 'legendTitle', 'tooltipDisabled']
      },
      {
        name: 'Heat Map',
        selector: 'heat-map',
        inputFormat: 'multiSeries',
        options: [
          'colorScheme', 'showXAxis', 'showYAxis', 'gradient', 'showLegend',
          'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel',
          'innerPadding', 'tooltipDisabled'
        ],
        defaults: {
          yAxisLabel: 'Census Date',
          cAxisLabel: 'Country'
        }
      },
      {
        name: 'Tree Map',
        selector: 'tree-map',
        inputFormat: 'singleSeries',
        options: ['colorScheme', 'tooltipDisabled', 'gradient']
      },
      {
        name: 'Number Cards',
        selector: 'number-card',
        inputFormat: 'singleSeries',
        options: ['colorScheme']
      },
      {
        name: 'Gauge',
        selector: 'gauge',
        inputFormat: 'singleSeries',
        options: [
          'showLegend', 'legendTitle', 'colorScheme', 'min', 'max', 'largeSegments', 'smallSegments', 'units',
          'angleSpan', 'startAngle', 'showAxis', 'margin', 'tooltipDisabled'
        ]
      },
      {
        name: 'Linear Gauge',
        selector: 'linear-gauge',
        inputFormat: 'single',
        options: ['colorScheme', 'value', 'previousValue', 'min', 'max', 'units']
      }
    ]
  },
  {
    name: 'Demos',
    charts: [
      {
        name: 'Heat Map - Calendar',
        selector: 'calendar',
        inputFormat: 'calendarData',
        options: [
          'colorScheme', 'showXAxis', 'showYAxis', 'gradient', 'showLegend',
          'innerPadding', 'tooltipDisabled'
        ],
        defaults: {
          width: 1100,
          height: 200
        }
      },
      {
        name: 'Number Cards - Status',
        selector: 'status-demo',
        inputFormat: 'statusData',
        options: ['colorScheme']
      },
      {
        name: 'Equation Plots',
        selector: 'plot-demo',
        inputFormat: 'statusData',
        options: [
          'colorScheme', 'schemeType', 'showXAxis', 'showYAxis',
          'autoScale', 'showGridLines', 'gradient',
          'roundDomains', 'tooltipDisabled'
        ]
      }
    ]
  }
];

export default chartGroups;
