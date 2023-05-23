import React, { useState } from 'react'
import "./movies.scss"
import useFetch from '../../hooks/useFetch';

export default function Movies() {
    const key = "f56bbb3a";
    const apiKey = `https://www.omdbapi.com/?apikey=${key}`;
    const [arr, setArr] = useState([]);
    function searchMovie(value, page = 1) {
        
        setArr([
            data,
            loading,
            error
        ])
        
    }
    searchMovie()
    // async function searchMovie(value, page = 1) {
    //     try {
    //         if (document.querySelector(".counter").innerHTML === "") {
    //             document.querySelectorAll(".paginate").forEach((button) => {
    //                 button.style.display = "none";
    //             });
    //         }
    //         if (document.querySelector(".counter").innerHTML !== "") {
    //             document.querySelectorAll(".paginate").forEach((button) => {
    //                 button.style.display = "flex";
    //             });
    //         }
    //         let response = await fetch(`${apiKey}&s=${value}&page=${page}`);
    //         let result = await response.json();
    //         renderMovie(result);
    //         total = Math.ceil(+result.totalResults / 10);
    //         // index = value
    //         slide(index, value, page);
    //         // slide(Math.ceil(+result.totalResults / 10), value, page);
    //     } catch (error) {
    //         renderE(error);
    //     }
    // }
    if (arr?.loading || !arr?.data) return (
        <div className="inner" style={{ width: "200px", height: "200px" }}><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style={{ margin: "auto", background: "rgb(22, 29, 37)", display: "block", }} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <g transform="rotate(0 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#aaaaaa">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(30 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#aaaaaa">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(60 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#aaaaaa">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(90 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#aaaaaa">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(120 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#aaaaaa">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(150 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#aaaaaa">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(180 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#aaaaaa">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(210 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#aaaaaa">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(240 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#aaaaaa">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(270 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#aaaaaa">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(300 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#aaaaaa">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(330 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#aaaaaa">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
                </rect>
            </g>
        </svg></div>
    )
    if (arr?.error) return (
        <h2>{arr?.error.toString()}</h2>
    )
    return (
        <>
            <div className="container">
                <a className="for-text-d" href="https://movies-nodirbek0105.netlify.app"
                ><h1 className="logo-site">MOVIES</h1></a
                >
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
                    {...arr?.data?.search.map(movie => {
                        return <>
                            <div class="movie-item">
                                <div class="about">
                                    <div data-movie-id={movie.imdbID}>i</div>
                                </div>
                                <div class="parent-img">
                                    <img class="movie-item__img" src={movie.Poster == "N/A" ? "https://via.placeholder.com/220x340": movie.Poster} width="220" height="340" />
                                </div>
                                <div class="movie-card">
                                    <h3 class="movie-card__title">{movie.Title}</h3>
                                </div>
                            </div>
                        </>
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
