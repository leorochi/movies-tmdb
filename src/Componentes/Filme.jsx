import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styles from '../Componentes/Estilos/Filme.module.css'

const Filme = () => {

  const {id} = useParams();

  const [filme, setFilme] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function buscaFilme(url) {
    try{
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setFilme(json);
    } catch(erro) {
      setError('Um erro ocorreu')
    } finally {
      setLoading(false);
    }
    }
    buscaFilme(`https://api.themoviedb.org/3/movie/${id}?api_key=33eb0a35db4a6144108b364a97612114`)
  }, [id])

  if(loading) return <div className='loading'>Carregando...</div>
  if(error) return <p>{error}</p>
  if(filme === null) return null;
  return (
    <section  className={styles.filme + ' animeLeft'}>
        <div>
          <img src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} alt="" />
          </div>
          <div>
          <h1>{filme.title}</h1>
          <span className={styles.descricao}>{filme.overview}</span>
        </div>
        <Link to='/'>
          <button className={styles.back}>Voltar</button>
        </Link>
    </section>

  )
}

export default Filme