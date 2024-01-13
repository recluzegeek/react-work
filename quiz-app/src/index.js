// Some Important Information

// Questions are being served from the FakeAPI made using json-server packager
  // run json-server by executing npm run server
  // if all is well, go to localhost:9000/questions to see questions.json
  // otherwise try to change the port number specified in the package.json and then scripts then in server script

  // After the server has been started, run npm start to load the application

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { QuizProvider } from "./contexts/QuizContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>
);
