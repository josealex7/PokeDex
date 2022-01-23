import { Typography } from '@mui/material';
import React from 'react';
import { useData } from '../hooks/useData';
import '../styles/evolucion.css'

const Involucion = ({resultado}) => {

    const estado = useData('https://pokeapi.co/api/v2/pokemon/'+(resultado.id)+'/')
    const {cargando, data} = estado
    cargando?console.log('cargando'):console.log(data.abilities[0].ability.name)
    console.log(resultado.ability)
  return (
      <div>
          { 
            cargando?
            <h1>Espere</h1>
            :
            <div>
                {
                    resultado.ability==data.abilities[0].ability.name?
                    <div>
                        <div className='flexEvolucion'>
                            <div>
                                <img src={data.sprites.other.dream_world.front_default} className='imagenEvolucion'/>
                                <Typography variant='h4'>{data.forms[0].name}</Typography>
                            </div>
                            <div className='ImagenFlecha'><img src="https://img.icons8.com/ios-glyphs/80/000000/right--v1.png"/></div>
                            <div className=''>
                                <img src={resultado.image} className='imagenEvolucion'/>
                                <Typography variant='h4'>{resultado.name}</Typography>
                            </div>
                        </div>
                    </div>
                    :
                    <div>

                    </div>
                }
            </div>
          }
      </div>
  );
};

export default Involucion;
