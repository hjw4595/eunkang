import {AppProps} from 'next/app'
import {GlobalStyle} from "../styles/global-styles";

function App({Component, pageProps} : AppProps){
    return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
}


export default App