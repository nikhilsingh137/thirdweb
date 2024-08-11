import React, { useEffect } from "react";
import Style from "./solution.module.scss";
import { fetchSolution } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Solution = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchSolution());
  }, [dispatch]);
  return (
    <div className={Style.container}>
      <div className={Style.wrapper}>
        {data.solutionData?.solution &&
          data.solutionData.solution.map((item) => {
            return (
              <>
                <div className={Style.heading}>
                  <h2>{item.title}</h2>
                </div>
                <div className={Style.content}>
                  {item.data &&
                    item.data.map((item) => {
                      return (
                        <div className={Style.data}>
                          <a href={item.url}>
                            <span>
                              <img src={item.img} alt="" />
                            </span>
                            <div className={Style.text}>
                              <h2>{item.title}</h2>
                              <p>{item.paragraph}</p>
                            </div>
                          </a>
                        </div>
                      );
                    })}
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Solution;
