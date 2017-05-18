# Bubble Chart

<!-- iframe width="100%" height="550" frameborder="0" src="https://embed.plnkr.co/7SqwjBi1hGcN2q6Ox1GU?show=preview"></iframe -->

 # Inputs

| Property            | Type        | Default Value | Description                                                                                                     |
|:--------------------|:------------|:--------------|:----------------------------------------------------------------------------------------------------------------|
| view                | number[]    |               | the dimensions of the chart [width, height]. If left undefined, the chart will fit to the parent container size |
| results             | object[]    |               | the chart data                                                                                                  |
| scheme              | object      |               | the color scheme of the chart                                                                                   |
| schemeType          | string      | 'ordinal'     | the color scale type. Can be either 'ordinal' or 'linear'                                                       |
| customColors        | object      |               | custom colors for the chart. Used to override a color for a specific value                                      |
| legend              | boolean     | false         | show or hide the legend                                                                                         |
| legendTitle         | string      | 'Legend'      | the legend title                                                                                                |
| xAxis               | boolean     | false         | show or hide the x axis                                                                                         |
| yAxis               | boolean     | false         | show or hide the y axis                                                                                         |
| showGridLines       | boolean     | true          | show or hide the grid lines                                                                                     |
| roundDomains        | boolean     | false         | round domains for aligned gridlines                                                                             |
| showXAxisLabel      | boolean     | false         | show or hide the x axis label                                                                                   |
| showYAxisLabel      | boolean     | false         | show or hide the y axis label                                                                                   |
| xAxisLabel          | string      |               | the x axis label text                                                                                           |
| yAxisLabel          | string      |               | the y axis label text                                                                                           |
| xAxisTickFormatting | function    |               | the x axis tick formatting                                                                                      |
| yAxisTickFormatting | function    |               | the y axis tick formatting                                                                                      |
| activeEntries       | object[]    | []            | elements to highlight                                                                                           |
| minRadius           | number      | 3             | minimum bubble radius in px                                                                                     |
| maxRadius           | number      | 10            | maximum bubble radius in px                                                                                     |
| tooltipDisabled     | boolean     | false         | show or hide the tooltip                                                                                        |
| tooltipTemplate     | TemplateRef |               | a custom ng-template to be displayed inside the tooltip                                                         |

# Outputs

| Property   | Description                              |
|:-----------|:-----------------------------------------|
| select     | click event                              |
| activate   | element activation event (mouse enter)   |
| deactivate | element deactivation event (mouse leave) |

# Data Format

## Regular bubble charts

The data format is multi series:

```
[
  {
    "name": "Germany",
    "series": [
      {
        "name": "2010",
        "x": 40632,
        "y": 80.3,
        "r": 80.4
      },
      {
        "name": "2000",
        "x": 36953,
        "y": 80.3,
        "r": 78
      },
      {
        "name": "1990",
        "x": 31476,
        "y": 75.4,
        "r": 79
      }
    ]
  },
  {
    "name": "USA",
    "series": [
      {
        "name": "2010",
        "x": 49737,
        "y": 78.8,
        "r": 310
      },
      {
        "name": "2000",
        "x": 45986,
        "y": 76.9,
        "r": 283
      },
      {
        "name": "1990",
        "x": 3706,
        "y": 75.4,
        "r": 253
      }
    ]
  },
  {
    "name": "France",
    "series": [
      {
        "name": "2010",
        "x": 36745,
        "y": 81.4,
        "r": 63
      },
      {
        "name": "2000",
        "x": 34774,
        "y": 79.1,
        "r": 59.4
      },
      {
        "name": "1990",
        "x": 29476,
        "y": 77.2,
        "r": 56.9
      }
    ]
  },
  {
    "name": "United Kingdom",
    "series": [
      {
        "name": "2010",
        "x": 36240,
        "y": 80.2,
        "r": 62.7
      },
      {
        "name": "2000",
        "x": 32543,
        "y": 77.8,
        "r": 58.9
      },
      {
        "name": "1990",
        "x": 26424,
        "y": 75.7,
        "r": 57.1
      }
    ]
  }
]
```
