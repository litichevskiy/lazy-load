## lazy-load

### warning

LazyLoad uses [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) if browser not supporting IntersectionObserver you need add polyfill
[IntersectionObserver-polyfill](https://github.com/w3c/IntersectionObserver/tree/main/polyfill)

Also you can use [built-in lazy-loading](https://web.dev/browser-level-image-lazy-loading/)


### Usage

```js
// default
const lazyLoad = new LazyLoad;

// or whith params
const selector = '.lazy'; // css selector, default .lazy
const options = {
  root: document.querySelector('.scrollArea'), // default document
  rootMargin: '0px',
  threshold: 1.0
};

const lazyLoad = new LazyLoad( options, selector );
```
more info about [options](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#creating_an_intersection_observer)


```
// img must contain data-src="lazy.jpg" and class="lazy"

<img alt="lazy image" class="lazy" data-src="lazy.jpg" />
```

### Dynamic content
if images add dynamically, you need call update()
```js
lazyLoad.update();
```

### Destroy
```js
lazyLoad.destroy();
```