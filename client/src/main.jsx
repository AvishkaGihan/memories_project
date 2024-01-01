import React from "react";
import { createRoot } from "react-dom";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers"; // Assuming you have a 'reducers' file

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = document.getElementById("root");

if (root !== null) {
  createRoot(root).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}
