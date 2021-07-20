https://github.com/docsifyjs/awesome-docsify



>[!DANGER]
> If **true**, links are relative to the current context.
> But this changes the links but not the path to pictures. 
> So the real problem is that docsify doesn't compile correctly the markdown image.

```js
window.$docsify = {
  // Relative path enabled
  relativePath: true,

  // Relative path disabled (default value)
  relativePath: false,
};
```

