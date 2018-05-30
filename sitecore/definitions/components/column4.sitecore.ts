import { Manifest, SitecoreIcon } from '@sitecore-jss/sitecore-jss-manifest';

export default (manifest: Manifest) => {
  manifest.addComponent({
    name: 'Column4',
    displayName: 'Column4',
    // totally optional, but fun
    icon: SitecoreIcon.EmoticonSmile
  });
};
