/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type:'category',
      label: 'How Tos',
      collapsed: false,
      items:[

        {
          type: 'doc',
          label: 'Configure wasp-cli',
          id: 'how-tos/wasp-cli',
        },
        {
          type: 'doc',
          label: 'Set Up a Chain',
          id: 'how-tos/setting-up-a-chain',
        },
        {
          type: 'doc',
          label: 'Manage a Chain',
          id: 'how-tos/chain-management',
        },
      ]
    }
  ],
};
