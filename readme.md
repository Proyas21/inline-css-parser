# getStyle

`getStyle` is default exported finction that takes css inline styling string and returns object

## Example:

```
const inlineCss = "fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5;stroke-miterlimit:4;stroke-dasharray:none";
```

```
const style = getStyle(inlineCss);    // returns an object that can be used as react style
```
