import React, { Fragment, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { PokemonContext } from "../../Context/Context";
import PokemonItem from "./PokemonItem/PokemonItem";

export default function ListPokemon({ pokemonData, loading }) {
  return (
    <div className="list-pokemon">
      {loading ? (
        <>Loading...</>
      ) : (
        <div className="wrap-pokemon-item">
          <Row>
            {pokemonData?.map((item, index) => {
              return (
                <Col md={3} className="col-pokemon-item">
                  <PokemonItem key={index} item={item} />
                </Col>
              );
            })}
          </Row>
        </div>
      )}
    </div>
  );
}
