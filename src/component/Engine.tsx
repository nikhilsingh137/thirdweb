import React, { useEffect } from "react";
import Style from "./eengine.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchClient } from "../redux/Slice";

const Engine = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchClient());
  }, [dispatch]);
  return (
    <div className={Style.engineTop}>
      <div className={Style.engine}>
        {data.clientData?.engine &&
          data.clientData.engine.map((item) => {
            return (
              <div className={Style.divide}>
                <div className={Style.text}>
                  <span>
                    <img src={item.img} alt="" />
                    <h2>{item.heading}</h2>
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.paragraph}</p>
                  <a href={item.url}>{item.button}</a>
                </div>
                <div className={Style.image}>
                  <img src={item.image} alt="" />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Engine;
