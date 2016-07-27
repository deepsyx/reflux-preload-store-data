[Reflux] Render components when all data stores are loaded
=============

Here is an example of high-order react component, which will diplay a loading animation until all stores are loaded. This is useful when you directly open a react page, that depends on asynchronously loaded data. For example if you have an user authentication and an action that loads user images, you might want to render the component when both request are completed.

In this example I'm exporting the react component like this:

    export default loadStores({
	    images: GalleryStore // load GalleryStore as images props
    }, ImageList);

So the ImageList component won't be rendered unless the GalleryStore's loaded property equals `true`. You can also add multiple stores in the firt parameter of loadStores. I've provided a simplified loadStore component named `loadStores.jsx` and a more complex version of it, which uses a fadeOut animation when the loading is done, named `loadStores_FADE_ANIMATION.jsx`. The stores are passed to the wrapped component as props (the prop key of each store equals to the key provided in the first parameter).