# Advance Angular Template

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.0.

## Sitecore JavaScript Services documentation

Check [JSS documentation](https://jss.sitecore.net/) for how to install JSS Server and configure Sitecore.

## App setup

1. `npm install` or `yarn`
1. `npm install -g @sitecore-jss/sitecore-jss-cli` or `yarn global add @sitecore-jss/sitecore-jss-cli`
1. `jss setup`

> This setup is optional to get started with development, as it assumes you have Sitecore installed.
>
> If you answer "yes", you would need to provide the path to your Sitecore installation's "Website" folder.

## Development server

Run `jss start`.

The app will be built and webpack server will be started. So it's expected that the browser will open with `http://localhost:3001` and familiar default welcome content is rendered.

The app will automatically reload if you change any of the source files.

When running the development server, it automatically sets up a sitecore mock server configures a proxy that forwards all requests to `/sitecore` to that sitecore mock server. Check `proxy.conf.js` to see mock server and proxy implementation.

### Congratulations!

The app is now running in dev mode sourcing data from local files and is not connected to Sitecore in any way.

## App deployment

### Pre-requisites

1. Sitecore instance has JSS packages installed.
1. Sitecore is configured for this JSS app.

### Steps

Run `jss deploy package`.

This step will:

* Run the production bundle of your app.
* Generate the app manifest.
* Generate a package with the manifest and production bundle.
* Install the package over HTTP on your Sitecore instance.

## Adding new Components

To add new Sitecore aware components, you need to complete the folliwing three steps:
 - Generate an Angular component using the cli
    - `ng g c <new component name>`
 - Add the new component to the JssModule's list located at  `src/app/app.modules.ts`
 - Generate a new `Sitecore component definition`

### Sitecore component definition
All sitecore component definitions are located in `sitecore/definitions/components`

*Example*

```javascript
import { Manifest, CommonFieldTypes, SitecoreIcon } from '@sitecore-jss/sitecore-jss-manifest';

export default (manifest: Manifest) => {
    manifest.addComponent({
        name: 'Welcome',
        displayName: 'Welcome',
        // totally optional, but fun
        icon: SitecoreIcon.EmoticonSmile,
        fields: [
        { name: 'logoImage', type: CommonFieldTypes.Image },
        { name: 'title', type: CommonFieldTypes.SingleLineText },
        { name: 'text', type: CommonFieldTypes.RichText },
        ],
        params: ['className']
    });
};
```