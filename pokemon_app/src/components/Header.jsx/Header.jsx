import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PokemonContext } from "../../Context/Context";
import logo from "../../img/pokemon-logo.jpg";
import icon_poke from "../../img/icon_poke.jpg";
export default function Header() {
  const { bag } = useContext(PokemonContext);

  return (
    <div className="header">
      <div className="logo-header">
        <Link to={"/"}>
          <img src={logo} alt="Pokemon-app" />
        </Link>
      </div>
      <Link to={"/bag"}>
        <div className="bag-info">
          <div className="bag-amount">
            <img className="icon-poke" src={icon_poke}></img>
            <div className="amount-content">
              <p className="amount">{bag?.length}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
