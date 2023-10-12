import { useEffect, useState } from "react";
import {MovieService} from "../../api/MovieService.js";
import MovieCard from "../../components/MovieCard/Moviecard.jsx";


const Home = ({ searchValueProp }) => {
    const [movies, setMovies] = useState([]);

    async function getMovies() {
        const { data: { results }
     } = await MovieService.getMovies();
        
     setMovies(results);
    }

    async function getMoviesSearch(moviestring) {
        const {
            data: { results },
        } = await MovieService.searchMovies(moviestring);

        setMovies(results);

    }

    useEffect(() => {
        getMovies();
    }, []);

    useEffect(() => {
        if (searchValueProp) {
            getMoviesSearch(searchValueProp);
        }
        if (searchValueProp === "" ) {
            getMovies (getMovies)
        }


    }, [searchValueProp]);


  return (
    <section className="Home">
        {movies.map((movie) => (
            <div key={movie.id}>
                <MovieCard movieProp={movie}></MovieCard>
            </div>
        ))}
    </section>
  )
}

export default Home