import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./container/Home";
import RegisterRedirect from "./container/RegisterRedirect";
import UrlStats from "./container/UrlStats";
import Dashboard from "./container/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="stats/:id" element={<UrlStats />} />
        <Route path=":id" element={<RegisterRedirect />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
