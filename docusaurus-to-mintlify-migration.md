# Migrating from Docusaurus to Mintlify

[Mintlify](https://mintlify.com) allows users to create documentation using AI. In this tutorial you'll learn how you can migrate your documentation from Docusaurus to Mintlify

Here' an example of what you'll have:

## Prerequisites

- A Docusaurus project on Github
- NPM
- Git

## Migration steps Overview

- Clone your Docusaurus project repo
- Change folder structure for Mintlify compatibility
- Change all .md files to .mdx
- Update imports and syntax in your .mdx files to sanitise it for Mintlify

## Clone Your Github repo and create a new branch

Head to [GitHub](https://github.com) and copy the url of your Docusaurus repo. Then run the following command in your terminal to clone the repo:

```bash
git clone <YOUR_GITHUB_REPO_URL>
```

Create and checkout a `mintlify-migration` branch to work on the migration

```bash
git chekout -b mintlify-migration
```

## Docausaurus folder structure vs. Mintlify

In your Docusaurus project your file structure probably looks something like this:

```bash
/your-project
├── /node_modules
├── /docs
│   ├── introduction.md
│   ├── getting-started.md
│   ├── /advanced
│   │   ├── deep-dive.md
├── /blog
├── /src
├── /static
├── /docusaurus.config.js
├── /sidebars.js
├── /package.json
├── /build
└── /README.md
```

For Mintlify, our structure needs to look like this:

```bash
/your-project
├── /node_modules
├── /docs
│   ├── /get-started
│   │   ├── introduction/
|            ├── introduction.mdx
├── /snippets
│   ├── ThemedImage.mdx
├── /img
├── mint.json
├── favicon.svg
├── package.json
├── package-lock.json
└── README.md
```

Now let's look at how we can update the Docusaurus project to the Mintlify structure.

## Changing to Mintlify compatible file structure

There's a lot of stuff we won't need from Docusaurus project. You can delete `docusaurus.config.js`, `sidebars.js`, `/blog` and `/build`

In mintlify each page is a `.mdx` file with the **same** name as the parent folder.

For example:

```bash
├── /docs
│   ├── /get-started
│   │   ├── introduction/
|            ├── introduction.mdx
```

Is a valid page. `introduction/introduction.md`, `introductions/introduction.mdx` or `introduction/introduction-page.mdx` are not. The `.mdx` file and parent folder must have the same name.

In your project, change all your `.md` file extensions to `.mdx` and create parent folders with the same name as the `.mdx` file.

## Sanitizing .mdx files for compatibility

Now that we've changed our file extension we need to remove Docusaurus specific tags and imports. Tags like `<Note>`, `<Tip>` or `<Info>` and imports like `@theme` will not work

### Tags

For tags, Mintlify provides alternatives called **Callout Boxes** like `<Notes> <Notes/>` for `<Note>`. To use them first install the component package by opening your terminal and running:

```bash
npm install mintlify
npm install @mintlify/components
```

Now replace all Docusaurus tags in your `.mdx` files with Mintlify Callout Boxes. Use this [list of callout boxes](https://mintlify.com/docs/content/components/callouts) to find the callout box which best fits the tag you were using.

### Imports

To use imports in Mintlify create a `snippets/` folder in the root folder. Then add your snippet as a `.mdx` file.

for example, in a Docusaurus project to switch between images for dark and light modes we would import a component like this:

```bash
//Docusaurus

import ThemedImage from '@theme/ThemedImage';

```

In Mintlify we create a `.mdx` snippet

```javascript
// snippets/ThemedImage.mdx

export const ThemedImage = ({ alt, sources }) => {
  if (typeof window === "undefined") {
    return null;
  }

  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return <img src={isDarkMode ? sources.dark : sources.light} alt={alt} />;
};
```

and import it like this:

```bash
//where-you-need-the-snippet.mdx

import { ThemedImage } from "/snippets/ThemedImage.mdx";

```

### Images

To use images, create a `img/` folder in your root directory and copy the images in your Docusaurus `static/` folder there.

### Comments

To use comments in Mintlify replace `<-- -->` with `/* */`

```bash
// Docusaurus
<-- Your Comment -->

//Mintlify
/* Your Comment*/

```

These are just the main compatibility changes needed. If you need to use other components not compatible with Mintlify, look through the [Mintlify component library](https://mintlify.com/docs/content/components/) and update your project to use ones that best match your Docusaurus component.

## Running Mintlify locally

Once you've updated your documentation to the Mintlify format, you can test it locally by creating and configuring the `mint.json` file in the root directory of your project. Here's an example of what it might look like:

```json
{
  "`schema": "https://mintlify.com/schema.json",
  "name": "Your Project Name",
  "colors": {
    "primary": "#YourPrimaryColor",
    "light": "#YourLightColor",
    "dark": "#YourDarkColor"
  },
  "favicon": "/path-to-your-favicon.svg",
  "navigation": [
    {
      "group": "Get Started",
      "pages": ["/docs/intro", "/docs/setup"]
    },
    {
      "group": "Features",
      "pages": ["/docs/feature1", "/docs/feature2"]
    }
  ],
  "tabs": [
    {
      "name": "Get Started",
      "url": "/docs/intro"
    }
  ]
}
```

Here's an explanation of the properties

- **``schema`**  
  The URL to the Mintlify schema for proper validation of the configuration.

- **`name`**  
  The name of your documentation project (e.g., `"IOTA Wiki"`).

- **`colors`**  
  Defines the primary color scheme of your documentation:

  - `primary`: The main accent color.
  - `light`: A lighter shade used for secondary elements.
  - `dark`: A darker shade used in themes or highlights.

- **`favicon`**  
  The path to the favicon file (a `.svg` file in your root directory ).

- **`navigation`**  
  Defines the structure of the navigation menu in your documentation:

  - `group`: Logical grouping of pages.
  - `pages`: The location of the folder of your specific .mdx page file

- **`tabs`**  
  Specifies additional tabs in your navigation bar:
  - `name`: Label displayed for the tab.
  - `url`: Corresponding URL for the tab’s content.

For mintlify to recognize your pages you need to add them to the `navigation` property. for example if you have pages for `docs/introduction/introduction.mdx` and
`docs/faq/faq.mdx`
you would add:

```bash
  {
      "group": "Introduction",
      "pages": [
        "/docs/introduction",
        "/docs/faq"
      ]
    },
```

Add all your pages with the updated folder structure and sanitized files in the navigation property.

Once you've set up your `mint.json` file, run locally with :

```bash
mintlify dev
```

Once everything is running. you can deploy using Mintlify

## Deployment

Go to [Mintlify](https://dashboard.mintlify.com/)
