import React, { useEffect, useState } from 'react'
import "./movies.scss"
import useFetch from '../../hooks/useFetch';

export default function Movies() {
    const [arr, setArr] = useState({});
    async function searchMovie(value, page = 1) {
        useEffect(() => {
            // const { loading, data } = useFetch(`https://www.omdbapi.com/?apikey=f56bbb3a&s=${value}&page=${page}`);
            const { data, loading , error } = useFetch(`https://www.omdbapi.com/?apikey=f56bbb3a&s=${value}&page=${page}`);
            // const { loading, data , error } = useFetch(`https://www.omdbapi.com/?apikey=f56bbb3a&s=hulk&page=1`);
            setArr({
                data,
                loading,
                error
            })
        }, [])
    }
    searchMovie("hulk" , 1 )
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
                    <form className="form-input-box" data-form>
                        <input className="input-box" type="text" data-form-title placeholder="Title" />
                        <input className="input-box" type="text" data-form-lang placeholder="Language" />
                        <input className="input-box" type="text" data-form-description placeholder="Description" />
                        <input className="input-box" type="text" data-form-img-url placeholder="Image Url:" />
                        <button className="input-box input-add" type="submit" data-add-btn> Add</button>
                    </form>
                </div>
                <div className="movie-item-box" data-box-movie>
                    {/* {...arr.data.search.map(movie => {
                        return (
                            <>

                                <div class="movie-item">
                                    <div class="about">
                                        <div data-movie-id={movie.imdbID}>i</div>
                                    </div>
                                    <div class="parent-img">
                                        <img class="movie-item__img" src={movie.Poster == "N/A" ? "https://via.placeholder.com/220x340" : movie.Poster} width="220" height="340" />
                                    </div>
                                    <div class="movie-card">
                                        <h3 class="movie-card__title">{movie.Title}</h3>
                                    </div>
                                </div>
                            </>)
                    })} */}
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