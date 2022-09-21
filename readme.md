# getStyle

`getStyle` is default exported finction that takes css inline styling string and returns object.\
takes `...string`\
returns `object`

## Example:

```js
const inlineCss =
  "fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5;stroke-miterlimit:4;stroke-dasharray:none";
```

```js
const style = getStyle(inlineCss);

/* returns an object that can be used as react style
{
  fill: '#ffffff',
  fillOpacity: 1,
  fillRule: 'evenodd',
  stroke: '#000000',
  strokeWidth: 0.5,
  strokeMiterlimit: 4,
  strokeDasharray: 'none'
}
*/
```

- It is also possible to pass multiple strings

  ```js
  const style = getStyle(
    "color:blue;font-size:46px;",
    "background-color:red; font-size:16px;"
  );

  /* returns an object and takes the last value of same property
  { color: 'blue', fontSize: '16px', backgroundColor: 'red' }
  */
  ```

- Also you can use multiple lines

  ```js
  getStyle(`  color:blue;font-size:46px;
              background-color:red;
              font-size:16px;
          `);

  /* returns the same object
  { color: 'blue', fontSize: '16px', backgroundColor: 'red' }
  */
  ```
