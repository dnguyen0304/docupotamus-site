---
sidebar_position: 1
---

# `docusaurus-plugin-editor`

## Plugin

Add **Markdown or React** files to `src/pages` to create a **standalone page**:

### Quickstart

```bash
npm install --save @docupotamus/docusaurus-plugin-editor
```

`docusaurus-plugin-editor` extends `plugin-content-docs`. Therefore, to avoid a
collision from multiple instances, remove `plugin-content-docs` from the preset
and add `docusaurus-plugin-editor` as a plugin.

Get the editUrl. This /blob/main path is required.

```js title="docusaurus.config.js"
const config = {
    plugins: [
        [
            '@docupotamus/docusaurus-plugin-editor',
            {
                // highlight-next-line
                editUrl: 'https://github.com/dnguyen0304/fake-docusaurus-site/blob/main/',
                // Include your remaining @docusaurus/plugin-content-docs
                // settings here.
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
    ],
    presets: [
        [
            'classic',
            ({
                // highlight-next-line
                docs: false,
                ...
            }),
        ],
    ],
}
```

### Developer Guide

```bash
$ npm link @docupotamus/docusaurus-plugin-editor && npm start
```
