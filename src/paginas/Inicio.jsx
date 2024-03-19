import { useEffect, useState } from "react";
import Carteleras from "../components/Carteleras";
import "../public/css/inicio.css";

function Inicio({ peliculas, tipo, titulo, setPelicula, setDetalles, modo }) {
  const [pelis, setPelis] = useState({});

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTkxYzdhOWNlZDRmNzYwYzU1YzhkYjE1NTE1ODQ2YSIsInN1YiI6IjY1ZjE5YWQyNmRlYTNhMDE2Mzc4ZDVhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sej5vwnEAxFP4qf8SdVbwo129BjXsfH4-tBg37EEoSE",
    },
  };

  useEffect(() => {
    if (tipo === 'populares') {
      fetch(
        "https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1",
        options
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          setPelis(response)
        })
        .catch((err) => console.error(err));
    }
    if (tipo === 'calificacion') {
      fetch('https://api.themoviedb.org/3/movie/top_rated?language=es-ES&page=1', options)
        .then(response => response.json())
        .then(response => {
          console.log(response);
          setPelis(response)
        })
        .catch(err => console.error(err));
    }
    if (tipo === 'cines') {
      fetch('https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1', options)
        .then(response => response.json())
        .then(response => {
          console.log(response);
          setPelis(response)
        })
        .catch(err => console.error(err));
    }
    if (tipo === 'estrenos') {
      fetch('https://api.themoviedb.org/3/movie/upcoming?language=es-ES&page=1', options)
        .then(response => response.json())
        .then(response => {
          console.log(response);
          setPelis(response)
        })
        .catch(err => console.error(err));
    }
  }, [tipo]);


  return (
    <>
      <div className={modo ? "fondo oscuro" : "fondo claro"}>
        <main className={modo ? "main fondo-oscuro" : "main fondo-claro"}>
          {
            peliculas.length > 0 ? <Carteleras modo={modo} titulo={"Resultado de la Busqueda"} setDetalles={setDetalles} peliculas={peliculas} setPelicula={setPelicula} /> : <Carteleras modo={modo} setDetalles={setDetalles} setPelicula={setPelicula} titulo={titulo} peliculas={pelis.results} />
          }

        </main>
      </div>
    </>
  );
}

export default Inicio;
