// import movie from "./movie.json"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../utils/httpClient";
import { Spinner } from "../components/Spinner";
import styles from "./MovieDetails.module.css"
import { useQuery } from "../hooks/useQuery";
import { getMovieImg } from "../utils/getMovieImg";


export function MovieDetails() {
    const { movieId } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const[movie, setMovie] = useState(null)

    const query = useQuery();
    const search = query.get("search")

    useEffect(() => {
        
    }, [search]);

    useEffect(() => {
        setIsLoading(true)
        get("/movie/" + movieId).then((data) => {
            setMovie(data)
            setIsLoading(false)
        });
    }, [movieId])

    if (isLoading) {
        return <Spinner />
    }


    const imageUrl = getMovieImg(movie.poster_path, 300)
    return (
        <div className={styles.detailsContainer}>
            <img className={`${styles.movieImage} ${styles.movieImage}`} src={imageUrl} alt={movie.title} />
            

            <div className={`${styles.columna}`}>
                <p className={styles.firstItem}><strong>Title:</strong> {movie.title}</p>
                <p>{movie.genres.map(genre => genre.name).join(",  ") }</p>
                <p><strong>Description:</strong> {movie.overview}</p>
            </div>
        </div>
    )
}