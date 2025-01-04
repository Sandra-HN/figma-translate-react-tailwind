import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import GPT4 from "./pages/GPT4";
import GPT3 from "./pages/GPT3";

const App = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen w-full">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <GPT4 />
              </Layout>
            }
          />
          <Route
            path="/GPT4"
            element={
              <Layout>
                <GPT4 />
              </Layout>
            }
          />
          <Route
            path="/GPT3"
            element={
              <Layout>
                <GPT3 />
              </Layout>
            }
          />
          <Route
            path="*"
            element={
              <Layout>
                <div className="flex flex-col items-center justify-center h-full py-20">
                  <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
                  <p className="text-lg">
                    The page you&apos;re looking for does not exist.
                  </p>
                </div>
              </Layout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
