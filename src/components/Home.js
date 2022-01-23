import { FormControl, FormHelperText, InputAdornment, OutlinedInput, Typography } from '@mui/material';
import React, {useState} from 'react';
import '../styles/home.css'
import { useData } from '../hooks/useData';
import CardsIndividual from './CardsIndividual';

const Home = () => {

  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=25&offset=0')
    const estado = useData(url)
    const {cargando, data} = estado

  const [search, setSearch] = useState('');

  const convertirObjeto = ()=>{
    
    if(search!==''){
      return {Data:data.results, Search:search}
    } else {
      return {Data:data.results, Search:''}
    } 
  }

  const handleChange =(event) =>{
    setSearch(event.target.value)
  }

  return (
  <div className='divPrincipalHome'>
      <Typography  variant='h4' sx={{ml:2, mt:4, mb:3}}>Pokedex.org</Typography>
      <div className='contenedorBusqueda'>
      <FormControl variant="filled"  color='secondary' sx={{mb:2, width: '60ch'}}>
          <OutlinedInput
            onChange={handleChange}
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">🔎</InputAdornment>}
          />
      <FormHelperText id="outlined-weight-helper-text">Buscar Pokémon por nombre</FormHelperText>
      </FormControl>
      </div>
      {/* {
        search==''?
          <div>
          <Card/>        
        </div>
        :
        <div>
          <h1>Buscando pokemon</h1>
        </div>
      } */}
      { 
           cargando?
           <h1>Cargando</h1>
           :
           <CardsIndividual result={convertirObjeto()}/>
       }
  </div>
  )
};

export default Home;
