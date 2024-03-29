import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// Loads the styled components
// styles on server-side rendering.
//
// Reference: https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/pages/_document.js
export default class Website extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }
}
