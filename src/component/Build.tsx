import React, { useEffect } from "react";
import Style from "./build.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchStack } from "../redux/Slice";

const Build = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchStack());
  }, [dispatch]);
  return (
    <div className={Style.container}>
      <div className={Style.wrapper}>
        {data.stackData?.build &&
          data.stackData.build.map((item) => {
            return (
              <>
                <div className={Style.text}>
                  <h2>{item.title}</h2>
                  <p>{item.paragraph}</p>
                  <a href={item.url}>{item.button}</a>
                </div>
                <div className={Style.image}>
                  <img src={item.img} alt="" />
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Build;
