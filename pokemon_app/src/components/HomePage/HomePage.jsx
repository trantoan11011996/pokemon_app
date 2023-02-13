import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { PokemonContext } from "../../Context/Context";
import DetailPokemon from "../DetailPokemon/DetailPokemon";
import ListPokemon from "../ListPokemon/ListPokemon";
import "../Style/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function HomePage() {
  const {
    setPokemonData,
    pokemonData,
    loading,
    detailPoke,
    setUrl,
    nextUrl,
    prevUrl,
    randomPoke,
  } = useContext(PokemonContext);
 
 
  return (
    <>
      <ToastContainer />
      <div className="container-homepage">
        <div className="home-page">
            <Row>
              <Col md={12} className="col-list-pokemon">
                <div className="wrap-list-pokemon">
                  <ListPokemon pokemonData={pokemonData} loading={loading} />
                </div>
              </Col>

              {/* <Col md={5} className="col-detail-pokemon">
            <div className="wrap-detail-pokemon">
              <DetailPokemon detailPoke={detailPoke} />
            </div>
          </Col> */}
            </Row>
            {/* <div className="btn-navigate">
              {prevUrl && (
                <Button
                  onClick={() => {
                    setPokemonData([]);
                    setUrl(prevUrl);
                  }}
                >
                  Previous
                </Button>
              )}
              {nextUrl && (
                <Button
                  onClick={() => {
                    setPokemonData([]);
                    setUrl(nextUrl);
                  }}
                >
                  Next
                </Button>
              )}
            </div> */}
          {/* <div className="poke-result">
            <button className="btn-catches" onClick={() => runFuncCatchPoke()}>
              Press to catch
            </button>
            {poke ? (
              <div className="result-detail">
                <div className="detail">
                  <img src={poke?.sprites?.front_default} />
                  <div className="result-info">
                    <p className="result-info_name">
                      <b>Name: </b>
                      {poke?.name}
                    </p>
                  </div>
                  <div className="result-stats">
                    <p className="content-child type-poke">
                      <b>Type</b>: {poke?.types[0]?.type?.name}
                    </p>
                    <p className="content-child height-stat">
                      <b>Height</b>: {poke?.height}
                    </p>
                    <p className="content-child weight-stat">
                      <b>Weight</b>: {poke?.weight}
                    </p>
                  </div>
                </div>
                <form className="form">
                  <div className="wrap-edit-name">
                    <input
                      value={renamePoke}
                      className="input-edit"
                      placeholder="Rename your Pokemon"
                      onChange={(e) => setRenamePoke(e.target.value)}
                    ></input>
                    <button
                      className="confirm-name"
                      onClick={(e) => confirmName(e, poke)}
                    >
                      Confirm name
                    </button>
                  </div>
                  <button
                    className="btn-add"
                    onClick={(e) => handleAddtoBag(e, poke)}
                  >
                    Add to your bag
                  </button>
                </form>
                {warningDuplicate && (
                  <b>This Pokemon already in your bag!!! please press again</b>
                )}
              </div>
            ) : (
              <div className="warning-result">
                Let try one more time to catches your Pokemon
              </div>
            )}
          </div> */}
          {randomPoke ? <>{randomPoke.name}</> : <></>}
        </div>
        <DetailPokemon detailPoke={detailPoke} />
      </div>
    </>
  );
}
