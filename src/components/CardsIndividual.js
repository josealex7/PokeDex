import React from 'react';
import CardPokemon from './CardPokemon';
import '../styles/CartasPokemon.css'

const CardsIndividual = ({result}) => {
  return (
    <div className='container'>
        <ul className='ulPokemon'>
            { 
                result.Search==''?
                result.Data.map(e=>(
                        <li key={e.name} className='liCartas'>
                            <CardPokemon url={e.url} />
                        </li>
                    
                ))
                :
                <div className='busquedaFiltrada'>
                  {
                    result.Data.map(e=>{
                      if(e.name.includes(result.Search.toLowerCase())){
                        return(
                          <li key={e.name} className='liCartas'>
                              <CardPokemon url={e.url} />
                          </li>
                        )
                      }
                    })
                  }
                </div>
            }
        </ul>
    </div>
  );
};

export default CardsIndividual;
