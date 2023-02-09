import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../Context/Context";
import "../DetailPokemon/detail.css";
export default function DetailPokemon({ detailPoke }) {
  const { setDetailPoke } = useContext(PokemonContext);
  return (
    <>
      {!detailPoke ? (
        <></>
      ) : (
        <div className="modal-overlay">
          <div className="detail-pokemon modal-container">
            <div className="wrap-btn-close">
              <button
                className="btn-close-modal"
                onClick={() => setDetailPoke(null)}
              >
                X
              </button>
            </div>
            <h1 className="detail-header">Detail Pokemon</h1>
            <div className="img-detail">
              <img src={detailPoke?.sprites?.front_default} />
            </div>
            <p className="content-header name-poke">
              Name: <b>{detailPoke?.name}</b>
            </p>
            <div className="detail-content-stat">
              <p className="content-child type-poke">
                <b>Type</b>: {detailPoke?.types[0]?.type?.name}
              </p>
              <p className="content-child height-stat">
                <b>Height</b>: {detailPoke?.height}
              </p>
              <p className="content-child weight-stat">
                <b>Weight</b>: {detailPoke?.weight}
              </p>
            </div>
            <div className="content-characteristic">
              <div className="list-abilities">
                <p className="header-abilities">
                  <b>List of Abilities</b>:{" "}
                </p>
                {detailPoke?.abilities.map((item, index) => {
                  return (
                    <div className="wrap-abilities">
                      <p className="content-child abilities">
                        {item.ability.name}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="list-moves">
                <p className="header-moves">
                  <b>List of Moves</b>:{" "}
                </p>
                {detailPoke?.moves.map((item, index) => {
                  return (
                    <div className="wrap-abilities">
                      <p className="content-child abilities">
                        {item.move.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
