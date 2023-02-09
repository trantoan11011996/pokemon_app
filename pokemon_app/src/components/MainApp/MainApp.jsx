import React from "react";
import { PokemonProvider } from "../../Context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import { AuthContext } from "../../Context/AuthContext";
import "..//Style/style.css";
import { Container } from "react-bootstrap";
import Header from "../Header.jsx/Header";
import UserBag from "../UserBag/UserBag";
export default function MainApp() {
  return (
    <AuthContext.Provider value={null}>
      <PokemonProvider>
        <BrowserRouter>
          <div className="main-app">
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/bag" element={<UserBag />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </PokemonProvider>
    </AuthContext.Provider>
  );
}
