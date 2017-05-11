# Tree Map Chart

<iframe width="100%" height="550" frameborder="0" src="https://embed.plnkr.co/VvVTLXOOsMGfYtT9c1CX?show=preview">
</iframe>

# Inputs

Property        | Type     | Default Value | Description
:-------------- | :------- | :------------ | :--------------------------------------------------------------------------------------------------------------
view            | number[] |               | the dimensions of the chart [width, height]. If left undefined, the chart will fit to the parent container size
results         | object[] |               | the chart data
scheme          | object   |               | the color scheme of the chart
customColors    | object   |               | custom colors for the chart. Used to override a color for a specific value
tooltipDisabled | boolean  | false         | show or hide the tooltip
valueFormatting | function |               | function that formats the cell value
labelFormatting | function |               | function that formats the cell label
gradient        | boolean  | false         | fill elements with a gradient instead of a solid color

# Outputs

Property | Description
:------- | :----------
select   | click event

# Data Format

The data format is single series:

```
[
  {
    "name": "Germany",
    "value": 8940000
  },
  {
    "name": "USA",
    "value": 5000000
  }
]
```
