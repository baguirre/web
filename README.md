# Ingame Web

### Changes
You can modify the sub-folders of `/src`

#### base
Contains images and the CNAME file required by GitHub pages. The content of this folder will be copied to `/dist` on the build process.

#### pages
For `.html`, `.hbs` or other *content* files, indluded layouts and partials.

#### styles
For `.less`, `.css` and other style files.

#### js
Scripts folder.

### Build
We use Grunt, you can see tasks details on the `Gruntfile.js` placed on root.
Basically, there are 3 main tasks:

#### Default
```
grunt
```
Build the static site on the `/dist` folder.

#### Serve
```
grunt serve
```
Run default task and serve the site on http://localhost:4000, and re-build the site on any change (on `/src` folder).

#### Publish
```
grunt publish
```
Run default task and commit&push the changes to our GitHub page repository (https://github.com/ingameio/ingameio.github.io). Finally clean `dist` and `.grunt` folders.

## CSS Tips
#### Basic Tips
- Use `<br/>` inside header tags to avoid margin and padding issues.

```html
<!-- NOT OK -->
<h1>Hello</h1>
<h1>World</h1>

<!-- OK -->
<h1>Hello<br/>
    World</h1>
```

#### Responsive Tips (for Bootstrap)
- Do not change (so much) the font size, logos and images size. Instead, reorder elements depending on resolution using `col-xs`, `col-sm`, `col-md` and `col-lg` css classes.
This approach implies less .css (it's more simple) and will look better!
See bootstrap reference (http://getbootstrap.com/css/#grid-options)

- For "stripe style" (fixed to window height), set <body> and <html> height to 100% height:

```css
body, html {
  height: 100%;
}
```
Then for every child of `<html>` you can set height to the percentage (of window height) you want. For "stripes", set to 100%.

```html
<body>
  <html>
    <div style="height: 100%;">Stripe<div>

    <div style="height: 50%;">Half stripe<div>
    <div style="height: 50%;">Other half stripe<div>
  </html>
</body>
```
Combine with `min-height` to avoid too small stripes.
