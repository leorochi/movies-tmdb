import React, { useEffect, useState } from 'react'
import styles from '../Componentes/Estilos/Filmes.module.css'
import { Link } from 'react-router-dom';

const Filmes = () => {

  const [filmes, setFilmes] = useState([]);

  
  useEffect(() => {
    async function buscaFilmes() {
      const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=33eb0a35db4a6144108b364a97612114`)
      const json = await response.json();
      setFilmes(json.results);
    }
    buscaFilmes();
  }, []);
  
  

if(filmes === null) return null;

console.log(filmes)
  return (
    <section className={styles.filmes + ' animeLeft'}>
      {filmes.map(({title, poster_path, id}) => 
      <Link to={`filme/${id}`}>
        <h1 className={styles.nome}>{title}</h1>
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="Capa do filme" />
        </Link>
        )}
    </section>
  )
  
}

export default Filmes