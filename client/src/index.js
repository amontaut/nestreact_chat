import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import * as socketIO from 'socket.io-client';
import App from "./pages/App/App";

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')
const root = createRoot(rootElement)

root.render(
        <Router>
            <Routes>
                <Route path="/chat/try" element={<App/>}></Route>
            </Routes>
        </Router>
//   <App/>
)










// import React from "react";
// import ReactDOM from "react-dom/client";
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import "./index.css";
// import App from "./App";

// // const rootElement = ReactDOM.createRoot(document.getElementById("root"));
// // if (!rootElement) throw new Error('Failed to find the root element')
// // const root = createRoot(rootElement)
// // root.render(
// //   <React.StrictMode>
// //         <Router>
// //             <Routes>
// //                 <Route path="/try/chat" element={<App />} />
// //             </Routes>
// //         </Router>
// //     </React.StrictMode>
// // );
