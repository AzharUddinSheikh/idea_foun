import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";

const News = React.lazy(() => import("./pages/News"));
const Page404 = React.lazy(() => import("./pages/404"));

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route
          path="/news"
          element={
            <React.Suspense>
              <News />
            </React.Suspense>
          }
        />
        <Route path="/" element={<Navigate to="news" />} />
        <Route
          path="*"
          element={
            <React.Suspense>
              <Page404 />
            </React.Suspense>
          }
        />
      </Routes>
    </React.Fragment>
  );
}

export default App;
