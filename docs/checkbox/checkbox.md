---
sidebar_position: 1
---

# `docusaurus-theme-checkbox`

## Installing

```bash
npm install --save @docupotamus/docusaurus-theme-checkbox
```

## Example

```js
import TaskList from '@theme/docupotamus-task-list/components/TaskList';

<TaskList>
- [ ] read work emails
- [ ] Go to the gym
- [ ] Then, you have to watch foo and bar.
- [ ] Hang out with partner for at least 1 hour.
- [ ] Check the database changes into integration so we can kick off a build before this afternoon.
</TaskList>
```

### Developer Guide

```bash
$ sudo npm link
```

```bash
$ npm link @docupotamus/docusaurus-theme-task-list && npm start
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

## Theme

You _must_ remove the following peer dependencies.

```json title="package.json"
{
    "peerDependencies": {
        // highlight-next-line
-       "@docusaurus/core": "2.2.x",
        // highlight-next-line
-       "@docusaurus/preset-classic": "2.2.x",
    },
}
```

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

`import DocBreadcrumbs from '@theme/docupotamus-editor/DocBreadcrumbs';`

```
<!-- plugin -->
rm -rf lib/ && npm link react react-dom && npm run build && npm run watch

<!-- theme -->
rm -rf lib/ && npm link @docusaurus/core @docusaurus/theme-classic @docusaurus/preset-classic react react-dom && npm run build && npm run watch
```

## Integration

```
docupotamusEditor: {
    swizzleIsEnabled: true,
},
```

```js title="theme/Layout/Provider"
import BaseLayoutProvider from '@theme-init/Layout/Provider';
import EditorLayoutProvider from '@theme/docupotamus-editor/Layout/Provider';
import ReadTimeLayoutProvider from '@theme/docupotamus-read-time/Layout/Provider';
import React from 'react';

export default function LayoutProvider(props) {
    return (
        <EditorLayoutProvider {...props}>
            <ReadTimeLayoutProvider {...props}>
                <BaseLayoutProvider {...props} />
            </ReadTimeLayoutProvider>
        </EditorLayoutProvider>
    );
};
```

```js title="theme/Root"
import EditorRoot from '@theme/docupotamus-editor/Root';
import ReadTimeRoot from '@theme/docupotamus-read-time/Root';
import * as React from 'react';

export default function Root({ children }) {
    return (
        <ReadTimeRoot>
            <EditorRoot>
                {children}
            </EditorRoot>
        </ReadTimeRoot>
    );
};
```