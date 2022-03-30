import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./container/Home";
import RegisterRedirect from "./container/RegisterRedirect";
import UrlStats from "./container/UrlStats";
import Dashboard from "./container/Dashboard";
import { ToastContainer } from "react-toastify";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route index element={<Home />} />
          <Route path="stats/:id" element={<UrlStats />} />
          <Route path=":id" element={<RegisterRedirect />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
        <ToastContainer />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
