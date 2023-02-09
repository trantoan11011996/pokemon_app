import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PokemonContext } from "../../Context/Context";
import logo from "../../img/pokemon-logo.jpg";
export default function Header() {
  const { bag } = useContext(PokemonContext);

  return (
    <div className="header">
        <div className="logo-header">
      <Link to={"/pokemon_app"}>
          <img src={logo} alt="Pokemon-app" />
      </Link>
        </div>
      <div className="bag-info">
        <div className="bag-content">
          <Link to={"/bag"}>
            <p>My Bag</p>
          </Link>
        </div>
        <div className="bag-amount">{bag?.length}</div>
      </div>
    </div>
  );
}
