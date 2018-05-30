
# Layout and Placeholders

Making components dynamic and easy to manupalte from a CM perspective.

Layout and placeholders are all created inside components. Also you are able to nest components and placeholders, giving an great level of posibilities

## Create Layouts

- 2 column layout
- 4 column layout

Creating those layouts is as simple as creating two new Angular components. But this time, we are going to create the components inside the rendering folder `src/app/renderings`.

```javascript
ng g c column4 --module app
ng g c column2 --module app
```

The same principal apply here when creating new components in Sitecore. You need to include them to the JssModule and create component definitions.

**Adding them to JssModule**
```javascript
JssModule.withComponents([
   ....
      { name: 'Column2', type: Column2Component },
      { name: 'Column4', type: Column4Component },
    ...
    ])
```

**Creating file definitions**
`sitecore/definitions/components/column2.sitecore.ts`
```javascript
import { Manifest, SitecoreIcon } from '@sitecore-jss/sitecore-jss-manifest';

export default (manifest: Manifest) => {
  manifest.addComponent({
    name: 'Column2',
    displayName: 'Column2',
    // totally optional, but fun
    icon: SitecoreIcon.EmoticonSmile
  });
};
```

`sitecore/definitions/components/column4.sitecore.ts`
```javascript
import { Manifest, SitecoreIcon } from '@sitecore-jss/sitecore-jss-manifest';

export default (manifest: Manifest) => {
  manifest.addComponent({
    name: 'Column4',
    displayName: 'Column4',
    // totally optional, but fun
    icon: SitecoreIcon.EmoticonSmile
  });
};
```

## Defining PlaceHolders

After creating layouts, you can set placeholders to in the html to allow users to inject components dynamically.

In the case of Column2 component the HTML looks as follow:

```html
<div class="container">
  <div class="row">
    <div class="col-6">
      <sc-placeholder name="c-left" [rendering]="rendering"></sc-placeholder>
    </div>
    <div class="col-6">
      <sc-placeholder name="c-right" [rendering]="rendering"></sc-placeholder>
    </div>
  </div>
</div>
```

You can see two placeholders with unique names

`<sc-placeholder name="c-left" [rendering]="rendering"></sc-placeholder>`

`<sc-placeholder name="c-right" [rendering]="rendering"></sc-placeholder>`

Once created, you need to add the placeholder's unique name to the placeholder's definition file `sitecore/definitions/placeholders.sitecore.ts`

```javascript
manifest.addPlaceholder(
    { name: 'main', displayName: 'Main' },
    { name: 'page-header', displayName: 'Page Header' },
    { name: 'page-content', displayName: 'Page Content' },
    { name: 'c-right', displayName: 'Column Right' },
    { name: 'c-left', displayName: 'Column Left' },
    { name: 'c1', displayName: 'Column 1' },
    { name: 'c2', displayName: 'Column 2' },
    { name: 'c3', displayName: 'Column 3' },
    { name: 'c4', displayName: 'Column 4' }
  );
  ```

  ## Using placeholders in the Route data file

The process of placing component inside placeholders is always the same. First you need to speficy the component name, then you can set other components within the placeholders defined inside the parent component.

*Example*

`data/routes/about/en.yaml`
```yaml
name: about
displayName: About
placeholders:
  main:
  - id: main-header-app
  - componentName: Welcome ...
    --------
  - componentName: Column2
    id: about-page-column2-component
    placeholders:
      c-left:
      - name: column2-left
        displayName: Card Lefts
        componentName: Card1
        fields:
          title:
            value: Card 0 1
          text:
            value: ...
          logoImage:
            value: ...
          link:
            value: ...
        params:
          className: 'aboutpage'
      c-right:
      - name: column2-right
        displayName: Card Right
        componentName: Card1
```

For more information visit [jss website](https://jss.sitecore.net/#/angular/intro?id=use-sc-placeholder-as-an-attribute)