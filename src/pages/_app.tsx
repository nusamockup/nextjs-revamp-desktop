import Head from 'next/head';
import { NsUIProvider } from '@ns-ui/core';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { Roboto } from 'next/font/google';

// import { FooterLinks } from '@/components/Footer';
// import MainHeader from '@/components/header/MainHeader';
import { NextPage } from 'next';
import MainHeader from '../comps/header/mainheader';
import { NsFooterDark } from 'src/comps/footer/ns-footer-dark';
// import { NsFooter } from '../comps/footer/ns-footer';

const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    style: ['normal', 'italic'],
    display: 'swap',
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    // const nsCache = createEmotionCache({ key: 'ns', prepend: false });
    // nsCache.compat = true;

    if (Component.getLayout) {
        return Component.getLayout(
            <>
                <style jsx global>{`
                    html {
                        font-family: ${roboto.style.fontFamily};
                    }
                `}</style>
                <Head>
                    <title>
                        NusaTrip - Flights & Hotels - Online travel - domestic &
                        international - Cheap Prices
                    </title>
                    {/* <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width"
                    /> */}
                    <link rel="shortcut icon" href="/favicon.svg" />
                </Head>
                <Component {...pageProps} />
            </>
        );
    }

    return (
        <>
            <Head>
                <title>
                    NusaTrip - Flights & Hotels - Online travel - domestic &
                    international - Cheap Prices
                </title>
                {/* <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                /> */}
                {/* <meta
                    name="viewport"
                    content="width=device-width, initial-scale=0.1"
                /> */}

                <link rel="shortcut icon" href="/favicon.svg" />
            </Head>
            <NsUIProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    colors: {
                        brand: [
                            '#E7F8FF',
                            '#D2ECFD',
                            '#A4D7F8',
                            '#73C0F3',
                            '#4EADF0',
                            '#38A2EE',
                            '#2B9CEE',
                            '#1D87D4',
                            '#0A73B7',
                            '#0067A9',
                        ],
                    },
                    primaryColor: 'brand',
                    primaryShade: {
                        light: 8,
                        dark: 8,
                    },
                    globalStyles: (theme) => ({
                        body: {
                            minWidth: '1024px',
                            overflow: 'auto',
                            fontFamily:
                                '"Roboto", -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
                        },
                        '.ns-Popover-dropdown': {
                            boxShadow:
                                'rgba(0, 0, 0, 0.05) 0px 0.0625rem 0.1875rem, rgba(0, 0, 0, 0.05) 0px 2.25rem 1.75rem -0.4375rem, rgba(0, 0, 0, 0.04) 0px 1.0625rem 1.0625rem -0.4375rem;',
                        },
                    }),
                }}
                // emotionCache={cache}
            >
                <MainHeader />
                <Component {...pageProps} />
                <NsFooterDark />
            </NsUIProvider>
        </>
    );
}
