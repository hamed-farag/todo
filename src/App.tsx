import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./Layouts/Main";

import Home from "./Pages/Home";
import History from "./Pages/History";

import "./styles/main.scss";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
