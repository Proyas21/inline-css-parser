# getStyle

`getStyle` is default exported finction that takes css inline styling string and returns object

## Example:

```
const inlineCss = `"fill":"#ffffff","fillOpacity":"1","fillRule":"evenodd","stroke":"#000000","strokeWidth":"0.5","strokeMiterlimit":"4","strokeDasharray":"none"`;
```

```
const style = getStyle(inlineCss);    // returns an object that can be used as react style
```
