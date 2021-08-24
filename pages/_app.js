import '../styles/globals.css';
import {wrapper} from '../store/index';

// import NextNProgress from "next-progress-bar"

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <NextNProgress height={6} color={"hsl(180, 66%, 49%)"} /> */}
      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(MyApp);
