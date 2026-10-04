import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { CustomCursor } from "./components/CustomCursor";
import CaseStudy from "./pages/CaseStudy";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Routes>
        <Route index element={<Home />} />
        <Route path="projects/:slug" element={<CaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
