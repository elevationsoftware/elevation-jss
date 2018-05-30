
# Adding new Components

To add new Sitecore aware components, you need to complete the folliwing three steps:
 - Generate an Angular component using the cli
    - `ng g c <new component name>`
 - Add the new component to the JssModule's list located at  `src/app/app.modules.ts`
 ```javascript
    imports: [
        ...
        JssModule.withComponents([
            { name: 'welcome', type: 'WelcomeComponent' },
            { name: '<new component>', type: '<New Component Type>' }
        ])
    ]
 ```
 - Generate a new `Sitecore component definition`

## Sitecore component definition
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

## Generating necessary components

Because in this template all the components are located in `src/app/components` lets navigate to that directory and use the Angular CLI to generate all the components we are going to use for our new site

```javascript
ng g c header --module app
ng g c footer --module app
ng g c carousel --module app
ng g c card-1 --module app
```

### Adding new components to the JssModule

```javascript
JssModule.withComponents([
      { name: 'Welcome', type: WelcomeComponent },
      { name: 'Card1', type: Card1Component},
      { name: 'Column2', type: Column2Component },
      { name: 'Column4', type: Column4Component },
      { name: 'Carousel', type: CarouselComponent },
      { name: 'Footer', type: FooterComponent },
      { name: 'Header', type: HeaderComponent }
    ])
```

### Generating Component definitions

`header.sitecore.ts`
```javascript
import { Manifest, SitecoreIcon, CommonFieldTypes } from '@sitecore-jss/sitecore-jss-manifest';

export default (manifest: Manifest) => {
    manifest.addComponent({
        name: 'Header',
        displayName: 'Header',
        // totally optional, but fun
        icon: SitecoreIcon.Headset,
        fields: [
        { name: 'logoImage', type: CommonFieldTypes.Image },
        ],
    });
};
```
`footer.sitecore.ts`
```javascript
import { Manifest, SitecoreIcon } from '@sitecore-jss/sitecore-jss-manifest';

export default (manifest: Manifest) => {
  manifest.addComponent({
    name: 'Footer',
    displayName: 'Footer',
    // totally optional, but fun
    icon: SitecoreIcon.EmoticonSmile
  });
};
```
`carousel.sitecore.ts`
```javascript
import { Manifest, CommonFieldTypes } from '@sitecore-jss/sitecore-jss-manifest';

export default (manifest: Manifest) => {
    manifest.addComponent({
        name: 'Carousel',
        displayName: 'Carousel',
        fields: [
            { name: 'items', displayName: 'Items', type: CommonFieldTypes.ContentList },
        ],
    });

    manifest.addComponent({
        name: 'Carousel-items-Item',
        displayName: 'Carousel Item',
        fields: [
            { name: 'image', displayName: 'Image', type: CommonFieldTypes.Image },
            { name: 'title', displayName: 'Title', type: CommonFieldTypes.SingleLineText },
            { name: 'body', displayName: 'Body', type: CommonFieldTypes.RichText },
        ],
    });
};
```
`card1.sitecore.ts`
```javascript
import { Manifest, CommonFieldTypes, SitecoreIcon } from '@sitecore-jss/sitecore-jss-manifest';

export default (manifest: Manifest) => {
  manifest.addComponent({
    name: 'Card1',
    displayName: 'Card1',
    // totally optional, but fun
    icon: SitecoreIcon.Pager,
    fields: [
      { name: 'logoImage', type: CommonFieldTypes.Image },
      { name: 'title', type: CommonFieldTypes.SingleLineText },
      { name: 'text', type: CommonFieldTypes.RichText },
      { name: 'link', displayName: 'Link', type: CommonFieldTypes.GeneralLink }
    ],
    params: ['className']
  });
};
```

## Injecting Sitecore content to components

There are two important configurations in the components that allow them to interact with Sitecore
- Rendering
- PageEditing

The page editing property can be acquire through the JssService

```javascript
 constructor(private jssService: JssService) {
    this.jssService.state.subscribe(jssState => {
      this.pageEditing = jssState.sitecore.context.pageEditing;
    });
  }
```

The rendering property is present in every sitecore component. 
```javascript
@Input() rendering: any;
```

## Sitecore Helper Directives
[See examples here](https://jss.sitecore.net/#/angular/intro?id=field-helper-directives)

- scImage
- scText
- scRichText
- scLink
- scFile