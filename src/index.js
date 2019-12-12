//import react.bootstrap stylesheet
import "bootstrap/dist/css/bootstrap.min.css";

//import react imports
import React from "react";
import ReactDOM from "react-dom";

//import redux
import { Provider } from "react-redux";
import { store, persistor } from "./_Store/store";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
//import reducers
import rootReducer from "./_Reducers/index";

//import children App component
import App from "./App";



ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </BrowserRouter>
</Provider>,
  document.getElementById("root")
);
