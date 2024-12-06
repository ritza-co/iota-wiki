# Migrating from Docusaurus to Mintlify

[Mintlify](https://mintlify.com) allows users to create documentation using AI. In this tutorial you'll learn how you can migrate your documentaion from Docusaurus to Mintlify

Here' an example of what you'll have:

## Prerequisites

- A Docusaurus project on Github
- NPM 
- Git

## Migration steps Overview

- Clone your Docusaurus project repo
- Change folder structure for Mintlify compatibility
- Change all .md files to .mdx
- Update imports and syntax in your .mdx files to sanitize it for Mintlify

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

So let's look at how we can update the Docusaurus project to the Mintlify structure.

## Changing to Mintlify compatible file structure

There's alot of stuff we won't need from Docusaurus project. You can delete `docusaurus.config.js`, `sidebars.js`, `/blog` and `/build`

In mintlify each page is a `.mdx` file with the **same** name as the parent folder.

For example:

```bash
├── /docs
│   ├── /get-started
│   │   ├── introduction/
|            ├── introduction.mdx
```

Is a valid page. `intoduction/introduction.md`, `intoductions/introduction.mdx` or `introduction/introduction-page.mdx` are not. The `.mdx` file and parent folder must have the same name.

In your project, change all your `.md` pages file extensions to `.mdx` and create parent folders with the same name as the `.mdx` file.

## Sanitizing .mdx files for compatibility

Now that we've changed our file extension we still need to remove Docusaurus specific tags and imports. for example tags like `:::note`, `:::tip` or `:::info` and imports like `@theme` will not work

### Tags

For tags, Mintlify provides alternatives called **Callout Boxes** like `<Notes> <Notes/>` for `:::note`. To use them first install the component package by running:

```bash
npm install @mintlify/components
```
Now replace all Docusaurus tags in your `.mdx` files with Mintlify Callout Boxes. Use this [list of callout boxes](https://mintlify.com/docs/content/components/callouts) to find the callout box which best fits the tag you were using.

### Imports

To use imports in Mintlify create a `snippets/` folder in the root folder