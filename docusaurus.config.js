// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {string} */
const REPOSITORY_URL = 'https://github.com/dnguyen0304/docupotamus-site';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Docupotamus',
    tagline: 'The fastest docs platform',
    url: 'https://docupotamus.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    plugins: ['@docupotamus/docusaurus-plugin-read-time'],

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: REPOSITORY_URL,
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'Home',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'Docs',
                    },
                    {
                        label: 'GitHub',
                        href: REPOSITORY_URL,
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                copyright: `Copyright © ${new Date().getFullYear()} Docupotamus, Inc.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            docupotamusReadTimePlugin: {
                contentSelector: "main[class*='docMainContainer'] article div.markdown > p",
                percentile: {
                    ranks: [25, 50],
                    style: 'p',
                },
            },
        }),
};

module.exports = config;
