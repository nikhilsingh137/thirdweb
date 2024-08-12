import React, { useEffect, useState } from "react";
import Style from "./favorate.module.scss";

const Favourate = () => {
  const [favorate, setFavorate] = useState<any[]>([]);

  useEffect(() => {
    const handleStorage = () => {
      const savedMovies = localStorage.getItem("favorate");
      const favorates = savedMovies ? JSON.parse(savedMovies) : [];
      setFavorate(favorates);
    };
    const storageHandler = () => {
      handleStorage();
    };

    window.addEventListener("updateFavorate", storageHandler);
    return () => {
      window.removeEventListener("updateFavorate", storageHandler);
    };
  }, []);

  const handleFavorate = (imdbID: any) => {
    const updatedData = favorate.filter((item) => item.imdbID !== imdbID);
    setFavorate(updatedData);
    localStorage.setItem("favorate", JSON.stringify(updatedData));
    window.dispatchEvent(new Event("updateFavorate"));
  };
  return (
    <div className={Style.container}>
      <div className={Style.wrapper}>
        <div className={Style.heading}>
          <h2>Favorate Movies</h2>
        </div>
        <div className={Style.content}>
          {favorate.map((item) => {
            return (
              <span>
                <img src={item.Poster} alt="" />
                <div className={Style.text}>
                  <h2>{item.Title}</h2>
                  <p>
                    <strong>Release Year</strong> {item.Year}
                  </p>
                </div>
                <button onClick={() => handleFavorate(item.imdbID)}>
                  Delete
                </button>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Favourate;
