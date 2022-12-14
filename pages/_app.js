import "../styles/globals.css";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import store from "../store/store"

let persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <CookiesProvider>
          <Component {...pageProps} />
        </CookiesProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
