import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }) {
  /* const fetcher = (...args) => fetch(...args).then((res) => res.json()); */
  const fetcher = (url) => fetch(url).then((response) => response.json());

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
