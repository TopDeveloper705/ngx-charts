# Area Chart

<iframe width="100%" height="550" frameborder="0" src="https://embed.plnkr.co/6HkONlHQ7pGHTgapt6vx?show=preview">
</iframe>

# Inputs

| Property            | Type     | Default Value | Description                                                                                                                      |
|:--------------------|:---------|:--------------|:---------------------------------------------------------------------------------------------------------------------------------|
| view                | number[] |               | the dimensions of the chart [width, height]. If left undefined, the chart will fit to the parent container size                  |
| results             | object[] |               | the chart data                                                                                                                   |
| scheme              | object   |               | the color scheme of the chart                                                                                                    |
| schemeType          | string   | 'ordinal'     | the color scale type. Can be either 'ordinal' or 'linear'                                                                        |
| customColors        | object   |               | custom colors for the chart. Used to override a color for a specific value                                                       |
| legend              | boolean  | false         | show or hide the legend                                                                                                          |
| legendTitle         | string   | 'Legend'      | the legend title                                                                                                                 |
| xAxis               | boolean  | false         | show or hide the x axis                                                                                                          |
| yAxis               | boolean  | false         | show or hide the y axis                                                                                                          |
| showGridLines       | boolean  | true          | show or hide the grid lines                                                                                                      |
| roundDomains        | boolean  | false         | round domains for aligned gridlines                                                                                              |
| showXAxisLabel      | boolean  | false         | show or hide the x axis label                                                                                                    |
| showYAxisLabel      | boolean  | false         | show or hide the y axis label                                                                                                    |
| xAxisLabel          | string   |               | the x axis label text                                                                                                            |
| yAxisLabel          | string   |               | the y axis label text                                                                                                            |
| xAxisTickFormatting | function |               | the x axis tick formatting                                                                                                       |
| yAxisTickFormatting | function |               | the y axis tick formatting                                                                                                       |
| timeline            | boolean  | false         | display a timeline control under the chart. Only available if x scale is date                                                    |
| autoScale           | boolean  | false         | set the minimum value of the y axis to the minimum value in the data, instead of 0                                               |
| curve               | function |               | the interpolation function used to generate the curve. It accepts any [d3.curve](https://github.com/d3/d3-shape#curves) function |
| gradient            | boolean  | false         | fill elements with a gradient instead of a solid color                                                                           |
| activeEntries       | object[] | []            | elements to highlight                                                                                                            |
| tooltipDisabled     | boolean  | false         | show or hide the tooltip                                                                                                         |

# Outputs

| Property   | Description                              |
|:-----------|:-----------------------------------------|
| select     | click event                              |
| activate   | element activation event (mouse enter)   |
| deactivate | element deactivation event (mouse leave) |

# Data Format

The data format is multi series:

```
[
  {
    "name": "Germany",
    "series": [
      {
        "name": "2010",
        "value": 7300000
      },
      {
        "name": "2011",
        "value": 8940000
      }
    ]
  },

  {
    "name": "USA",
    "series": [
      {
        "name": "2010",
        "value": 7870000
      },
      {
        "name": "2011",
        "value": 8270000
      }
    ]
  }
]
```
