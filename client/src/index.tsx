import ReactDOM from "react-dom/client";
import SiteRouter from "./Routes/SiteRouter.tsx";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./Redux/api/store.ts";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

function App() {
  return <SiteRouter />;
}

root.render(
  <CookiesProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </CookiesProvider>
);
