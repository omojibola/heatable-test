import '@/styles/globals.css';
import '@/styles/spinner.css';
import '@/styles/card.css';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}
