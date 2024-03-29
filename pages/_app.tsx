import Head from 'next/head';
import React, { useMemo } from 'react';
import withDarkMode, { useDarkMode } from 'next-dark-mode';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, ThemeProps } from '../src/theme';
import { useContent } from '../src/content';
import { Analytics } from "@vercel/analytics/react"

const GlobalStyle = createGlobalStyle<{ theme: ThemeProps }>`
    *, ::after, ::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border-width: 0;
        border-style: solid;
        border-color: #e2e8f0;
    }

    * {
        transition: all 0.15s;
    }

    html {
        line-height: 1.5;
    }

    body {
        background-color: ${props => props.theme.colors.background.simple};
        font-family: 'Asap', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    }

    section {
        padding: 4rem .75rem;
        margin: 0 .75rem;

        @media (min-width: 640px) {
            display: grid;
            grid-template-columns: repeat(8, minmax(0, 1fr));
        }

        @media (min-width: 1280px) {
            grid-template-columns: repeat(6, minmax(0, 1fr));
        }
    }

    header > div,
    section > div {
        margin: 0 1rem;

        @media (min-width: 640px) {
            grid-column-start: 2;
            grid-column-end: 8;
        }

        @media (min-width: 1280px) {
            grid-column-end: 6;
        }
    }

    header, footer {
        text-align: center;
        background-color: ${props => props.theme.colors.background.accent};
    }

    h1, h2, h3 {
        color: ${props => props.theme.colors.text.title};
    }

    h1 {
        font-weight: 700;
        font-size: 2.25rem;
    }

    p, strong {
        color: ${props => props.theme.colors.text.simple};
    }

    a {
        color: ${props => props.theme.colors.text.link};
        background-color: transparent;
        text-decoration: inherit;
    }

    button, input, optgroup, select, textarea {
        padding: 0;
        line-height: inherit;
        color: inherit;
    }

    button, select {
        text-transform: none;
    }

    button, input, optgroup, select, textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
    }

    ol, ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    img, video {
        max-width: 100%;
        height: auto;
    }
`;

const App = ({ Component, pageProps }) => {
    const { darkModeActive } = useDarkMode();

    const theme = useMemo(() => {
        return darkModeActive ? darkTheme : lightTheme;
    }, [darkModeActive]);

    const content = useContent();

    const lastLanguage =
        content.hero.description.languages[
            content.hero.description.languages.length - 1
        ];
    const metaDescription = `${
        content.hero.description.prefix
    } ${content.hero.description.languages.join(', ')}${
        content.hero.description.suffix
    }`.replace(
        `, ${lastLanguage}`,
        ` ${content.hero.description.and} ${lastLanguage}`,
    );

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />

                {/* Primary Meta Tags */}
                <title>{content.meta.title}</title>
                <meta name="title" content={content.meta.title} />
                <meta name="description" content={metaDescription} />

                {/* Icons generated by https://realfavicongenerator.net/ */}
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/icons/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/icons/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/icons/favicon-16x16.png"
                />
                <link rel="manifest" href="/icons/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/icons/safari-pinned-tab.svg"
                    color="#1a202c"
                />
                <link rel="shortcut icon" href="/icons/favicon.ico" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta
                    name="msapplication-config"
                    content="/icons/browserconfig.xml"
                />
                <meta name="theme-color" content="#ffffff" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://luisfelipesdn12.now.sh/"
                />
                <meta property="og:title" content={content.meta.title} />
                <meta property="og:description" content={metaDescription} />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://luisfelipesdn12.now.sh/"
                />
                <meta property="twitter:title" content={content.meta.title} />
                <meta
                    property="twitter:description"
                    content={metaDescription}
                />

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Asap:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
                    rel="stylesheet"
                />

                {/* <link rel="stylesheet" href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" /> */}
            </Head>
            <GlobalStyle theme={theme} />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
                <Analytics />
            </ThemeProvider>
        </>
    );
};

export default withDarkMode(App);
