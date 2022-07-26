import AppContext from '@context/AppContext';
import UseInitialState from '@hooks/UseInitialState';
import Header from '@components/Header';
import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
  const initialState = UseInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
