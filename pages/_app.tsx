import "../styles/globals.css";
// import "../utils/firebase/firebase.config";
import type { AppProps } from "next/app";
import { firebaseInit } from "../utils/firebase/firebase.config";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import { store } from "../utils/redux/store";
export default function App({ Component, pageProps }: AppProps) {
  firebaseInit();
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
