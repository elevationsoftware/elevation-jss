// extends the Disconnected Sitecore Layout Service to
// mock custom context navigation data. This mocks the server-side
// navigation extensions added by `AppNavigationProcessor` to LS.
// See the sitecore/config/*.config file for more on the server-side of this.

module.exports = function navigationMockContext(request) {
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

  if (request.query.sc_lang && request.query.sc_lang.startsWith('es-mx')) {
    navigation = [
      {
        name: 'Inicio',
        path: '/',
        children: [
          {
            name: 'Acera De',
            path: '/about',
          },
          {
            name: 'Productors',
            path: '/products'
          },
          {
            name: 'Galeria',
            path: '/gallery'
          }
        ],
      },
    ];
  }

  return navigation;
};
