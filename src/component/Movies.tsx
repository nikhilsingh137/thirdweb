import React, { useState } from "react";
import Style from "./movies.module.scss";
import { fetchMovies } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Movies = () => {
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);

  const handleChange = (e: any) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e: any) => {
    dispatch(fetchMovies({ query }));
  };

  const handleFavorate = (movie: any) => {
    const savedMovies = localStorage.getItem("favorate");
    const favorates = savedMovies ? JSON.parse(savedMovies) : [];
    console.log(favorates);

    if (!favorates.some((item: any) => item.imdbID === movie.imdbID)) {
      favorates.push(movie);
      localStorage.setItem("favorate", JSON.stringify(favorates));
      window.dispatchEvent(new Event("updateFavorate"));
    }
  };
  return (
    <div className={Style.container}>
      <div className={Style.wrapper}>
        <div className={Style.form}>
          <input
            type="text"
            value={query}
            placeholder="Search Movies"
            onChange={handleChange}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className={Style.content}>
          {data.moviesData?.Search &&
            data.moviesData.Search.map((item) => {
              return (
                <span>
                  <img src={item.Poster} alt="" />
                  <div className={Style.text}>
                    <h2>{item.Title}</h2>
                    <p>
                      <strong>Release Year</strong> {item.Year}
                    </p>
                  </div>
                  <button onClick={() => handleFavorate(item)}>
                    Add Favorate
                  </button>
                </span>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Movies;
