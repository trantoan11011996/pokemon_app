import React from "react";
import { PokemonProvider } from "../../Context/Context";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import { AuthContext } from "../../Context/AuthContext";
import "..//Style/style.css";
import { Container } from "react-bootstrap";
import Header from "../Header.jsx/Header";
import UserBag from "../UserBag/UserBag";
import Footer from "../Footer/Footer";
import "../../index.css";
export default function MainApp() {
  return (
    <AuthContext.Provider value={null}>
      <PokemonProvider>
        <HashRouter>
          <Header />
          <div className="app-container">
            <div className="main-app">
              <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/bag" element={<UserBag />}></Route>
              </Routes>
            </div>
            <Footer />
          </div>
        </HashRouter>
      </PokemonProvider>
    </AuthContext.Provider>
  );
}
