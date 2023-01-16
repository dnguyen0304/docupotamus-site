---
sidebar_position: 1
---

# `docusaurus-plugin-editor`

```bash
npm install --save \
    @docupotamus/docusaurus-plugin-editor \
    @docupotamus/docusaurus-theme-editor
```

## Plugin

Add **Markdown or React** files to `src/pages` to create a **standalone page**:

### Quickstart

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
$ npm link @docupotamus/docusaurus-plugin-editor @docupotamus/docusaurus-theme-editor \
    && npm start
```

## Theme

## Lambda

### `handleOAuthRedirect`

#### Environment Variables

<!-- TODO(dnguyen0304): Document how to find GitHub client ID and secret. -->

```bash title=".env"
export CLIENT_ID="{{ CLIENT_ID }}"
export CLIENT_SECRET="{{ CLIENT_SECRET }}"
export REFERER_ALLOWLIST="{{ REFERER_ALLOWLIST }}"
```

## Swizzling

```bash
npm run swizzle -- --list
```

```bash
npm run swizzle @docusaurus/theme-classic {{ COMPONENT }} -- --typescript --wrap
```

See also:
- https://docusaurus.io/docs/swizzling
- https://docusaurus.io/docs/typescript-support