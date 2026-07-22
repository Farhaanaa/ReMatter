import { Routes, Route } from "react-router-dom";

import Landing from "./pages/landing";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Marketplace from "./pages/marketplace";
import Recommendations from "./pages/recommendations";
import About from "./pages/about";
import NotFound from "./pages/notfound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/recommendations" element={<Recommendations />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;