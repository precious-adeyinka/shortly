import '../styles/globals.css';
import {wrapper} from '../store/index';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp);
