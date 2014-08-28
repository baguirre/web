# Ingame Web

## Changes
You can modify `/src` where you will find the following folders

### base
Contains images and the CNAME file required by GitHub pages. The content of this folder will be copied to `/dist` on the build process.

### pages
For `.html`, `.hbs` or other *content* files, indluded layouts and partials.

### styles
For `.less`, `.css` and other style files.

### js
Scripts folder.

## Build
We use Grunt, you can see tasks details on the `Gruntfile.js` placed on root.
Basically, there are 3 main tasks:

### Default
```
grunt
```
Build the static site on the `/dist` folder.

### Serve
```
grunt serve
```
Run default task and serve the site on http://localhost:4000, and re-build the site on any change (on `/src` folder).

### Publish
```
grunt publish
```
Run default task and commit&push the changes to our GitHub page repository (https://github.com/ingameio/ingameio.github.io). Finally clean `dist` and `.grunt` folders.

