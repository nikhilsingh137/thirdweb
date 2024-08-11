import React, { useEffect } from "react";
import Style from "./app.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchClient } from "../redux/Slice";

const App = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchClient());
  }, [dispatch]);
  return (
    <div className={Style.container}>
      <div className={Style.wrapper}>
        {data.clientData?.app &&
          data.clientData.app.map((item) => {
            return (
              <div className={Style.content}>
                <span>
                  <img src={item.img} alt="" />
                </span>
                <div className={Style.text}>
                  <h2>{item.title}</h2>
                  <p>{item.paragraph}</p>
                  <a href={item.url}>{item.button}</a>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default App;
