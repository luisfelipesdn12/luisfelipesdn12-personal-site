import Head from "next/head";
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../src/theme";

const GlobalStyle = createGlobalStyle`
    *, ::after, ::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Primary Meta Tags */}
                <title>Luis Felipe - Code Development</title>
                <meta name="title" content="Luis Felipe - Code Development" />
                <meta name="description" content="Hello, I'm Luis Felipe! I'm a computer science student and I can code for: automations, websites, machine learning, APIs and data science. My main languages are Python, Java and Go." />

                {/* Icons generated by https://realfavicongenerator.net/ */}
                <link rel="apple-touch-icon" sizes="180x180" href="assets/icons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="assets/icons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="assets/icons/favicon-16x16.png" />
                <link rel="manifest" href="assets/icons/site.webmanifest" />
                <link rel="mask-icon" href="assets/icons/safari-pinned-tab.svg" color="#1a202c" />
                <link rel="shortcut icon" href="assets/icons/favicon.ico" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="msapplication-config" content="assets/icons/browserconfig.xml" />
                <meta name="theme-color" content="#ffffff" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://luisfelipesdn12.now.sh/" />
                <meta property="og:title" content="Luis Felipe - Code Development" />
                <meta property="og:description" content="Hello, I'm Luis Felipe! I'm a computer science student and I can code for: automations, websites, machine learning, APIs and data science. My main languages are Python, Java and Go." />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://luisfelipesdn12.now.sh/" />
                <meta property="twitter:title" content="Luis Felipe - Code Development" />
                <meta property="twitter:description" content="Hello, I'm Luis Felipe! I'm a computer science student and I can code for: automations, websites, machine learning, APIs and data science. My main languages are Python, Java and Go." />

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Asap:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
            </Head>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

export default App;
