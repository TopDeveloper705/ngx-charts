import d3 from '../d3';
export function getScaleType(values) {
    var date = true;
    var num = true;
    for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
        var value = values_1[_i];
        if (!isDate(value)) {
            date = false;
        }
        if (typeof value !== 'number') {
            num = false;
        }
    }
    if (date)
        return 'time';
    if (num)
        return 'linear';
    return 'ordinal';
}
function isDate(value) {
    if (value instanceof Date) {
        return true;
    }
    return false;
}
export function getDomain(values, scaleType, autoScale) {
    var domain = [];
    if (scaleType === 'time') {
        var min = Math.min.apply(Math, values);
        var max = Math.max.apply(Math, values);
        domain = [min, max];
    }
    else if (scaleType === 'linear') {
        values = values.map(function (v) { return Number(v); });
        var min = Math.min.apply(Math, values);
        var max = Math.max.apply(Math, values);
        if (!autoScale) {
            min = Math.min(0, min);
        }
        domain = [min, max];
    }
    else {
        domain = values;
    }
    return domain;
}
export function getScale(domain, range, scaleType, roundDomains) {
    var scale;
    if (scaleType === 'time') {
        scale = d3.scaleTime()
            .range(range)
            .domain(domain);
    }
    else if (scaleType === 'linear') {
        scale = d3.scaleLinear()
            .range(range)
            .domain(domain);
        if (roundDomains) {
            scale = scale.nice();
        }
    }
    else if (scaleType === 'ordinal') {
        scale = d3.scalePoint()
            .range(range)
            .domain(domain);
    }
    return scale;
}
//# sourceMappingURL=bubble-chart.utils.js.map