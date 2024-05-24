import "./App.css";
import Content from "./Page/Content";
import DetailPage from "./Page/DetailPage";
import { Route, Routes } from "react-router-dom";
//import { ProductProvider } from "./ContextService/ProductContext";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/DetailPage/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
