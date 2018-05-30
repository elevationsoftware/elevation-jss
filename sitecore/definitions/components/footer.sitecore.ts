import { Manifest, SitecoreIcon } from '@sitecore-jss/sitecore-jss-manifest';

export default (manifest: Manifest) => {
  manifest.addComponent({
    name: 'Footer',
    displayName: 'Footer',
    // totally optional, but fun
    icon: SitecoreIcon.EmoticonSmile
  });
};
