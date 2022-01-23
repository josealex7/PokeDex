import React from 'react';
import { useParams } from "react-router-dom";
import { useData } from '../hooks/useData';
import '../styles/detalle.css'
import { Typography } from '@mui/material';
import Evolucion from './Evolucion';
import Involucion from './Involucion';


const Detalle = () => {
  const { id } = useParams();
  const estado = useData('https://pokeapi.co/api/v2/pokemon/'+id+'/')
  const {cargando, data} = estado
  console.log(data)
  const style = `contenedorDetalleSub ${!cargando?data.types[0].type.name:''}` 

  return (
    <div className='contenedorDetallePokemon'>
        {
          cargando?
          <h1>Espere</h1>
          :
          <div className={style}>
            <div className='ContenedorNombre'>
              <Typography variant='h3'>{data.forms[0].name}</Typography>
            </div>
            <div className='contenedorDetalleHabilidades'>
              <div>
                <img src={data.sprites.other.dream_world.front_default} className='imagenPokemonDetalle'/>
              </div>
              <div className='contenedorHabilidades'>
                <div className='contenedeorHabilidadesDetalle'>
                    <div className='grassPoison'>
                      <div className='contedor50porciento divContenedor50'>
                        <Typography variant='h6'>{data.types[0].type.name}</Typography>
                      </div>
                      <div className='contedor50porciento divContenedor51'>
                        <Typography variant='h6'>
                          Poison
                        </Typography>
                      </div>
                    </div>
                    <div className='grassPoison'>
                      <div className='contedor50porciento'>
                        <Typography variant='body1'>
                          <label className='boldLabel'>HP</label>
                        </Typography>
                      </div>
                      <div>
                        <Typography variant='body1'>
                          {data.stats[0].base_stat}
                        </Typography>
                      </div>
                    </div>
                    <div className='grassPoison'>
                      <div className='contedor50porciento'>
                        <Typography variant='body1'>
                          <label className='boldLabel'>Attack</label>
                        </Typography>
                      </div>
                      <div>
                        <Typography variant='body1'>
                          {data.stats[1].base_stat}
                        </Typography>
                      </div>
                    </div>
                    <div className='grassPoison'>
                      <div className='contedor50porciento'>
                        <Typography variant='body1'>
                          <label className='boldLabel'>Defense</label>
                        </Typography>
                      </div>
                      <div>
                        <Typography variant='body1'>
                          {data.stats[2].base_stat}
                        </Typography>
                      </div>
                    </div>
                    <div className='grassPoison'>
                      <div className='contedor50porciento'>
                        <Typography variant='body1'>
                          <label className='boldLabel'>Speed</label>
                        </Typography>
                      </div>
                      <div>
                        <Typography variant='body1'>
                          {data.stats[3].base_stat}
                        </Typography>
                      </div>
                    </div>
                    <div className='grassPoison'>
                      <div className='contedor50porciento'>
                        <Typography variant='body1'>
                          <label className='boldLabel'>Sp Atk</label>
                        </Typography>
                      </div>
                      <div>
                        <Typography variant='body1'>
                          {data.stats[4].base_stat}
                        </Typography>
                      </div>
                    </div>
                    <div className='grassPoison'>
                      <div className='contedor50porciento'>
                        <Typography variant='body1'>
                          <label className='boldLabel'>Sp Def</label>
                        </Typography>
                      </div>
                      <div>
                        <Typography variant='body1'>
                          {data.stats[5].base_stat}
                        </Typography>
                      </div>
                    </div>
                    </div>
                </div>
                <div>
                  <Typography variant='h4'>#{data.id}</Typography>
                </div>
              </div>
              <div>
                <div className='ContenedorNombre'>
                  <Typography sx={{mb:1}} variant='h4'>Profile</Typography>
                </div>
                <div  className='habilidadesHeight'>
                  <div>
                    <Typography sx={{ml:4, mb:5}} variant='h6'><label className='labelHabilidades'>height:  </label>  {data.height}</Typography>
                  </div>
                  <div>
                    <Typography sx={{ml:4, mb:5}} variant='h6'><label className='labelHabilidades'>weight:  </label>  {data.weight}</Typography>
                  </div>
                </div>
                <div className='habilidadesHeight'>
                  <div>
                    <Typography variant='h6' sx={{ml:4, mb:3}}>
                      <label className='labelHabilidades'>Abilities:  </label>  
                      {data.abilities[0].ability.name}, 
                      {data.abilities[1]==undefined||data.abilities[1]==null?'':data.abilities[1].ability.name}
                    </Typography>
                  </div>
                  <div>
                    <Typography sx={{ml:4, mb:5}} variant='h6'><label className='labelHabilidades'>base_experience:  </label>  {data.base_experience}</Typography>
                  </div>
                </div>
              </div>

              <div>
                <div className='ContenedorNombre'>
                  <Typography sx={{ mb:1}} variant='h4'>Evolution</Typography>
                </div>
                {
                  id!=1?
                  <Involucion resultado={{
                    name: data.forms[0].name,
                    id: Number(id)-1,
                    image: data.sprites.other.dream_world.front_default,
                    ability: data.abilities[0].ability.name
                  }}/>
                  :''
                }
                <Evolucion resultado={{
                  name: data.forms[0].name,
                  id: Number(id)+1,
                  image: data.sprites.other.dream_world.front_default,
                  ability: data.abilities[0].ability.name
                }}/>
              </div>

              <div>
                <div className='ContenedorNombre'>
                <Typography sx={{ mb:1}} variant='h4'>Galery</Typography>
                </div>
                <div className='contenedorImagenesGaleria'>
                  <img src={data.sprites.back_default} className='imagenesGaleria'/>
                  <img src={data.sprites.back_shiny} className='imagenesGaleria'/>
                  <img src={data.sprites.front_default} className='imagenesGaleria'/>
                  <img src={data.sprites.front_shiny} className='imagenesGaleria'/>
                  <img src={data.sprites.other.dream_world.front_default} className='imagenesGaleria'/>
                  <img src={data.sprites.other.home.front_default} className='imagenesGaleria'/>
                  <img src={data.sprites.other.home.front_shiny} className='imagenesGaleria'/>
                </div>
              </div>
            </div>
        }
    </div>
  );
};

export default Detalle;
