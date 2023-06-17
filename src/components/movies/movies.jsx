import React, { useEffect, useState } from 'react'
import "./movies.scss"
import useFetch from '../../hooks/useFetch';
import { Alert, LinearProgress } from '@mui/material';

export default function Movies() {
    const [arr, setArr] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    async function searchMovie(value, page = 1) {
        try {
            useEffect(() => {
                const { data: response } = useFetch(value, page);
                const jsonData = response.then((data) => {
                    setArr({ data: data.data })
                })
                // return setLoading(true)
            }, [{ value, page }])

        } catch (error) {
            setError(error)
        } finally {
            // setLoading(false)
        }
    }
    searchMovie("hulk")
    // if(loading) return <LinearProgress/>
    if (error) return <Alert variant='outlined' />
    return (
        <>
            <div className="container">
                <a className="for-text-d" href="https://movies-nodirbek0105.netlify.app">
                    <h2 className="logo-site">MOVIES</h2>
                </a>
                <div className="box-input">
                    <form data-input-search>
                        <input
                            name="search"
                            className="input-box"
                            type="search"
                            data-form-search
                            placeholder="Search"
                        />
                        <button type="submit" className="btn-primary">SEARCH</button>
                    </form>
                    {/* <form className="form-input-box" data-form>
                        <input className="input-box" type="text" data-form-title placeholder="Title" />
                        <input className="input-box" type="text" data-form-lang placeholder="Language" />
                        <input className="input-box" type="text" data-form-description placeholder="Description" />
                        <input className="input-box" type="text" data-form-img-url placeholder="Image Url:" />
                        <button className="input-box input-add" type="submit" data-add-btn> Add</button>
                    </form> */}
                </div>
                <div className="movie-item-box" data-box-movie>
                    {arr.data?.Search.map(movie => {
                        return (
                            <>

                                <div key={movie.imdbID} className="movie-item">
                                    <div className="about">
                                        <div data-movie-id={movie.imdbID}>i</div>
                                    </div>
                                    <div className="parent-img">
                                        <img className="movie-item__img" src={movie.Poster == "N/A" ? "https://via.placeholder.com/220x340" : movie.Poster} width="220" height="340" />
                                    </div>
                                    <div className="movie-card">
                                        <h3 className="movie-card__title">{movie.Title}</h3>
                                    </div>
                                </div>
                            </>)
                    })}
                </div>
            </div>
            <div className="parent-counter">
                <button className="paginate left"><i></i><i></i></button>
                <div className="counter"></div>
                <button className="paginate right"><i></i><i></i></button>
            </div>

        </>
    )
}