import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";

const COURIER_USER_ID =
  localStorage.getItem("COURIER_USER_ID") ||
  Math.round(Math.random() * 10e16).toString(36);

localStorage.setItem("COURIER_USER_ID", COURIER_USER_ID);

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App courierUserId={COURIER_USER_ID} />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
