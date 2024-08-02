import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "../lib/store/store.ts";
import { RouterProvider } from "../lib/router/RouterProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider
        routes={[
          {
            path: "/",
            element: <App />,
            children: [
              // Others
            ],
          },
        ]}
      />
    </Provider>
  </React.StrictMode>
);
