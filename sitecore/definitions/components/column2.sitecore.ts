import { Manifest, SitecoreIcon } from '@sitecore-jss/sitecore-jss-manifest';

export default (manifest: Manifest) => {
  manifest.addComponent({
    name: 'Column2',
    displayName: 'Column2',
    // totally optional, but fun
    icon: SitecoreIcon.EmoticonSmile
  });
};