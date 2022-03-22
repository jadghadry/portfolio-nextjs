import type { AppProps } from "next/app";
import { GlobalStyle } from "_/styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
