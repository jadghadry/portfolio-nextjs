import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import { Layout } from "_/components/Layout";
import { GlobalStyle } from "_/styles/global";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
