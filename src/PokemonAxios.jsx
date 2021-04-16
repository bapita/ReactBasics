import React, {useState, useEffect} from 'react';
import axios from "axios";

const PokemonAxios = () => {
    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();
    const [img, setImg] = useState();

    useEffect(() => {
            async function getData() {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
                const img = `https://pokeres.bastionbot.org/images/pokemon/${num}.png`;
                console.log(response.data.name);
                setName(response.data.name);
                setMoves(response.data.moves.length); // because moves is an arrary 
                setImg(img);
            }

            getData();
        })

    return(
        <>
            <br/> <hr />
            <div className="select_pokemon">
                <h1>Select no. and get Pokemon from pokeAPI</h1>
                <select className="custom-select" style={{width:'200px'}} value={num} onChange={(event) => {
                    setNum(event.target.value);
                }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="25">25</option>
                </select>
            
            </div>
            <div className="pokemon">
                <h1>Pokemon's name is <span style={{color:'red'}}>{name}</span></h1>
                <h1>His number of moves are <span style={{color:'red'}}>{moves}</span></h1>
                <img src={img} alt=""/>
            </div>
                
        </>
    );
}

export default PokemonAxios;