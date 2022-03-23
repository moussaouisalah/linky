import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./container/Home";
import NewUrl from "./container/NewUrl";
import RegisterRedirect from "./container/RegisterRedirect";
import UrlStats from "./container/UrlStats";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="stats/:id" element={<UrlStats />} />
        <Route path=":id" element={<RegisterRedirect />} />
        <Route path="new" element={<NewUrl />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
