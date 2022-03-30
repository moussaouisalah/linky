import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";

import ErrorBoundary from "./components/ErrorBoundary";
import Spinner from "./components/Spinner";

const Home = lazy(() => import("./container/Home"));
const RegisterRedirect = lazy(() => import("./container/RegisterRedirect"));
const Dashboard = lazy(() => import("./container/Dashboard"));
const UrlStats = lazy(() => import("./container/UrlStats"));

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense
          fallback={
            <div className="page__container flex justify-center items-center">
              <Spinner />
            </div>
          }
        >
          <Routes>
            <Route index element={<Home />} />
            <Route path="stats/:id" element={<UrlStats />} />
            <Route path=":id" element={<RegisterRedirect />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
        <ToastContainer />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
