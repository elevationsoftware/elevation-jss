
# Routes and Data

During a Code First development, routing and data is control from the `data` directory

## Addint routes to the Site

There are two steps required to add routes to the application:
- Add a new directory to the `data/routes`
- Add child routes to `build/sitecore-context-navigation-mock.js`

*Update mock routes*

```javascript
let navigation = [
    {
      name: 'Home',
      path: '/',
      children: [
        {
          name: 'About',
          path: '/about'
        },
        {
          name: 'Products',
          path: '/products'
        },
        {
          name: 'Gallery',
          path: '/gallery'
        }
      ],
    },
  ];
```

The directory structure should looks as follow:
- products - `data/routes/products/en.yaml`
- about - `data/routes/about/en.yaml`
- gallery - `data/routes/gallery/en.yaml`
- home - `data/routes/en.yaml`

## Creating a shared header component

Shared component can be created in `data/component-content` and reference in any route by a unique ID

To create a shared header component, you just need to add the appropiate directories and the yaml files

*Example*

`data/component-content/Header/Main Header/en.yaml`

```yaml
name: Shared Header
componentName: Header
id: main-header-app
fields:
  logoImage:
    value:
      src: "/data/media/img/elevatedlogo.png"
      alt: Logo
```

Now that component can be reference as follow

`data/routes/en.yaml`
```yaml
name: home
id: home-page
displayName: Home
placeholders:
  main:
  - id: main-header-app
  - componentName: Welcome
    fields:
    ....
```