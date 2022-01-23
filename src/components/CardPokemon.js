import { Typography } from '@mui/material';
import React from 'react';
import { useData } from '../hooks/useData';
import '../styles/CartasPokemon.css'
import {Link} from 'react-router-dom'



const CardPokemon = ({url}) => {
    const estado = useData(url)
    const {cargando, data} = estado
    const style = `ContenedorCarta ${!cargando?data.types[0].type.name:''}` 
  return (
    
    <div className={style}>
        {
            cargando?
            <h1>Cargando</h1>
            :
            <Link to={`/detalle/${data.id}`} className='links-pokemon'>
                <div className='CartaPokemon'>
                    <div>
                        <Typography variant='h4'>{data.id}</Typography>
                    </div>
                    <div>
                        <img src={data.sprites.other.dream_world.front_default} alt='pokemon' className='ImagenPkemonPrincipal'/>
                    </div>
                    <div>
                        <Typography variant='h6'>Name: {data.forms[0].name}</Typography>
                        <Typography variant='h6'>type: {data.types[0].type.name}</Typography>
                    </div>
                </div>
            </Link>
        }
    </div>
    
  );
};

export default CardPokemon;
