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
