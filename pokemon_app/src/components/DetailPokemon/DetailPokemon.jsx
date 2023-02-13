import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../Context/Context";
import "../DetailPokemon/detail.css";
export default function DetailPokemon({ detailPoke }) {
  const {
    setDetailPoke,
    getRandomPoke,
    addTocart,
    bag,
    warningDuplicate,
    setWarningduplicate,
    setPokemonData,
    pokemonData,
  } = useContext(PokemonContext);
  const [poke, setPoke] = useState();
  const [renamePoke, setRenamePoke] = useState("");
  const [resultFailed, setResultFailed] = useState(false);
  let emptyArr = [];
  let arrPoke = [detailPoke];
  const createChances = () => {
    return Math.random() < 0.5;
  };

  const catchListPoke = (chances) => {
    if (chances) {
      return arrPoke;
    } else {
      return emptyArr;
    }
  };

  const exportPoke = (pokeData) => {
    console.log("poke",pokeData)
    if (pokeData.length === 1) {
      setPoke(arrPoke[0]);
      setResultFailed(false)
      return;
    } else if (pokeData.length === 0){
      setResultFailed(true);
      return;
    }
  };

  const runFuncCatchPoke = () => {
    setWarningduplicate(false);
    const chances = createChances();
    console.log("chances",chances)
    const result = catchListPoke(chances);
    exportPoke(result);
  };

  const confirmName = (e, poke) => {
    e.preventDefault();
    const newPokeWithRename = { ...poke, name: renamePoke };
    setRenamePoke("");
    setPoke(newPokeWithRename);
    setPokemonData(
      pokemonData.map((item) => {
        if (item.id === poke.id) {
          return {
            ...item,
            name: renamePoke,
          };
        }
        return item;
      })
    );
  };
  const handleAddtoBag = (e, poke) => {
    addTocart(e, poke);
  };
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
                onClick={() => {
                  setDetailPoke(null);
                  setPoke(null);
                  setResultFailed(false)
                }}
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
            <div className="catch-poke">
              <button className="btn-catch" onClick={() => runFuncCatchPoke()}>
                Catch this Poke
              </button>
              {poke ? (
                <div className="wrap-btn-add">
                  <button
                    className="btn-add"
                    onClick={(e) => handleAddtoBag(e, detailPoke)}
                  >
                    Add to your bag
                  </button>
                  {warningDuplicate && (
                    <p className="text-duplicate">
                      This Pokemon already in your bag!!! please press again
                    </p>
                  )}
                </div>
              ) : (
                <></>
              )}
              {resultFailed && (
                <div className="result-failed">
                  Let try one more time to catches your Pokemon
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
