import { BrowserRouter, Route, Routes } from "react-router";
import Libraries from "./pages/Libraries.tsx";
import Library from "./pages/Library.tsx";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index={true} element={<Libraries />} />
        <Route path="/library/:id" element={<Library />} />
      </Routes>
    </BrowserRouter>
  );
};
