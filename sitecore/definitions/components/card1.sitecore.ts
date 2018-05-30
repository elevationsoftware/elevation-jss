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
