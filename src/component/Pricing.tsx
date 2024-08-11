import React, { useEffect } from "react";
import Style from "./pricing.module.scss";
import { fetchPricing } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Pricing = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchPricing());
  }, [dispatch]);
  return (
    <div className={Style.container}>
      <div className={Style.wrapper}>
        {data.pricingData?.pricing &&
          data.pricingData.pricing.map((item) => {
            return (
              <>
                <div className={Style.heading}>
                  <h2>{item.title}</h2>
                  <h3>{item.slug}</h3>
                  <p>
                    {item.detail} <a href="/pricing">{item.plan}</a>
                  </p>
                </div>
                <div className={Style.content}>
                  {item.item &&
                    item.item.map((item) => {
                      return (
                        <div className={Style.detail}>
                          <div className={Style.data}>
                            <h2>{item.title}</h2>
                            <p>{item.paragraph}</p>
                            <h3>{item.price}</h3>
                            <div className={Style.list}>
                              <ul>
                                {item.item.map((list) => {
                                  return <li>{list}</li>;
                                })}
                              </ul>
                            </div>
                            <div className={Style.button}>
                              <a href={item.url}>{item.button}</a>
                            </div>
                          </div>
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

export default Pricing;
