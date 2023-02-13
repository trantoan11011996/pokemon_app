import React, { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState();
  const [page, setPage] = useState("");
  const [prevUrl, setPrevUrl] = useState();
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [detailPoke, setDetailPoke] = useState();
  const [randomPoke, setRandomPoke] = useState(null);
  const [pokeInBag, setPokeInBag] = useState([]);
  const [warningDuplicate, setWarningduplicate] = useState(false);
  const [bag, setBag] = useState([]);

  useEffect(() => {
    fetchPokemonData();
    const pokeInBag = getPokeInBag();
    setBag(pokeInBag);
  }, [url]);

  const getPokeInBag = () => {
    const json = localStorage.getItem("pokeInBag");
    return json ? JSON.parse(json) : [];
  };

  const fetchPokemonData = async () => {
    setLoading(true);
    const fectchData = await fetch(url, {
      method: "GET",
    });
    const data = await fectchData.json();
    getPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };
  const getPokemon = async (resPokemon) => {
    resPokemon.map(async (item) => {
      const result = await fetch(item.url, {
        method: "get",
      });
      const data = await result.json();
      setPokemonData((state) => {
        state = [...state, data];
        return state;
      });
    });
  };

  const getRandomPoke = () => {
    if (pokemonData.length === 20) {
      const random = Math.floor(Math.random() * pokemonData.length);
      setRandomPoke(pokemonData[random]);
    }
  };

  const addTocart = (e, poke) => {
    console.log("poke",poke)
    e.preventDefault();
    let clonePoke = [...bag];
    const findDuplicate = clonePoke.some((item) => {
      return item.id === poke.id;
    });
    if (!findDuplicate) {
      clonePoke = [...bag, poke];
      localStorage.setItem("pokeInBag", JSON.stringify(clonePoke));
      setBag(clonePoke);
      setWarningduplicate(false);
      setTimeout(() => {
        toast.success("Succes to add your pokemon to bag");
      }, 1000);
      return;
    } else {
      setWarningduplicate(true);
      return;
    }
  };
  const value = {
    setPokemonData,
    pokemonData,
    loading,
    detailPoke,
    setDetailPoke,
    setUrl,
    nextUrl,
    prevUrl,
    randomPoke,
    getRandomPoke,
    getPokeInBag,
    addTocart,
    bag,
    setBag,
    warningDuplicate,
    setWarningduplicate,
  };
  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };
