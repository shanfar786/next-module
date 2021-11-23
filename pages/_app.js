import "typeface-roboto";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from "react-redux";
import store from "../store";

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp