import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return (
  <container>
    <Component {...pageProps} />
  </container>
  );
}

export default MyApp
