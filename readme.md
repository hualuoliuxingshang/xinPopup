# xinPopup文档

## 上手

```html
<link rel="stylesheet" href="xinPopup.css">
<script src="xinPopup.js"></script>
<script>
    xinPopup.boot('#trigger', '#popup', { xPosition: 'center', yPosition: 'center' });
</script>
```

### 选项    

```js
xinPopup.boot('#trigger', '#popup', { 
            xPosition: 'center', //横轴位置: 居中，支持：center|left|right
            yPosition: 'center', //纵轴位置：居中，支持：center|bottom|top
            on: 'click', //触发事件 click|dblclick
            keyToHide: 'Escape',//关闭快捷键,可以自行设置，键盘敲击时会根据输入的内容自由变换快捷键
             });
</script>
```