## 图片

```html
<div class="container">
    <img src="/imgs/plants/crop/cotton/陆地棉的棉桃.png" width="100%" alt="陆地棉的棉桃。图片：ecotonethreads.com">
    <img src="/imgs/plants/crop/cotton/成熟的棉桃.jpg" width="100%" alt="成熟的棉桃。图片：tuttosemi.com">
</div>
```

**CSS 居中**

```css
.container {
  display: flex;
}

@media (max-width: 1024px) {
  .container {
    flex-wrap: wrap;
  }
}

.container > img {
  padding: 5px;
}
```

