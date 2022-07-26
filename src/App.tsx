import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import MainLayout from "./Layouts/Main";

import Home from "./Pages/Home";
import History from "./Pages/History";

import "react-toastify/dist/ReactToastify.css";
import "./app.styles.scss";
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
      <ToastContainer />
    </Router>
  );
}

export default App;
