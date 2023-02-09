import React, { useContext, useState } from "react";
import { PokemonContext } from "../../../Context/Context";
import DetailPokemon from "../../DetailPokemon/DetailPokemon";


export default function PokemonItem({item}){
    const {getDetail,setDetailPoke,detailPoke} = useContext(PokemonContext)
    const [isOpen,setIsOpen] = useState(false)

    return(
        <div className="pokemon-item" onClick={()=>setDetailPoke(item)}>
            <h2 className="pokemon-id">{item.id}</h2>
            <img src={item.sprites.front_default} alt=""></img>
            <h2 className="pokemon-name">{item.name}</h2>
        </div>
    )
}