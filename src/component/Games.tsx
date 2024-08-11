import React, { useEffect } from "react";
import Style from "./games.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchGame } from "../redux/Slice";

const Games = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchGame());
  }, [dispatch]);
  return (
    <div className={Style.games}>
      <div className={Style.gameTop}>
        {data.gameData?.game &&
          data.gameData.game.map((item) => {
            return (
              <div className={Style.heading}>
                <h2>{item.title}</h2>
                <p>{item.paragraph}</p>
              </div>
            );
          })}
        <div className={Style.contant}>
          {data.gameData?.game &&
            data.gameData.game.map((item) => {
              return (
                <>
                  {item.data &&
                    item.data.map((item) => {
                      return (
                        <a href={item.url}>
                          <span>
                            <img src={item.img} alt="" />
                          </span>
                          <div className={Style.text}>
                            <h2>{item.title}</h2>
                            <p>{item.paragraph}</p>
                          </div>
                        </a>
                      );
                    })}
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Games;
