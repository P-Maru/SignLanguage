import "./App.css";

import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

import MainPage from "./page/MainPage.js";
import LoginPage from "./page/LoginPage.js";
import SignUpPage from "./page/SignUpPage.js";

import DailySignPage from "./page/DailySignPage.js";
import HospitalSignPage from "./page/HospitalSignPage.js";
import SchoolSignPage from "./page/SchoolSignPage.js";
import DownloadPage from "./page/DownloadPage.js";
import NoticePage from "./page/NoticePage.js";

import Service from "./page/Service.js";
import SignRecPage from "./page/SignRecPage.js";
import ObjectRecPage from "./page/ObjectRecPage.js";
import DocuRecPage from "./page/DocuRecPage.js";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>

          <Route path="/LoginPage" element={<LoginPage />}></Route>
          <Route path="/SignUpPage" element={<SignUpPage />}></Route>

          <Route path="/DailySignPage" element={<DailySignPage />}></Route>
          <Route
            path="/HospitalSignPage"
            element={<HospitalSignPage />}
          ></Route>
          <Route path="/SchoolSignPage" element={<SchoolSignPage />}></Route>
          <Route path="/DownloadPage" element={<DownloadPage />}></Route>
          <Route path="/NoticePage" element={<NoticePage />}></Route>
          <Route path="/Service" element={<Service />}></Route>
          <Route path="/SignRecPage" element={<SignRecPage />}></Route>
          <Route path="/ObjectRecPage" element={<ObjectRecPage />}></Route>
          <Route path="/DocuRecPage" element={<DocuRecPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
