import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchStack } from "../redux/Slice";
import Style from "./banner.module.scss";

const Banner = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchStack());
  }, [dispatch]);
  return (
    <div className={Style.bannerTop}>
      <div className={Style.banner}>
        {data.stackData?.data &&
          data.stackData.data.map((item) => {
            return (
              <div className={Style.bannerDivide}>
                <div className={Style.text}>
                  <h2>
                    {item.title}, <a href="#/">{item.slug}</a> {item.heading}
                  </h2>
                  <p>{item.paragraph}</p>
                  <div className={Style.button}>
                    <a href={item.url}>{item.button}</a>
                  </div>
                </div>
                <div className={Style.image}>
                  <img src={item.img} alt="" />
                  <img
                    alt="icon-frontend"
                    loading="lazy"
                    className={Style.img}
                    width="256"
                    height="332"
                    decoding="async"
                    data-nimg="1"
                    srcSet="https://thirdweb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-frontend.6fd9c495.png&w=256&q=75"
                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-frontend.6fd9c495.png&amp;w=640&amp;q=75"
                  />
                  <img
                    alt="icon-frontend"
                    loading="lazy"
                    className={Style.img1}
                    width="256"
                    height="332"
                    decoding="async"
                    data-nimg="1"
                    srcSet="https://thirdweb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-backend.a3ef33f7.png&w=256&q=75"
                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-frontend.6fd9c495.png&amp;w=640&amp;q=75"
                  />
                  <img
                    alt="icon-frontend"
                    loading="lazy"
                    className={Style.img2}
                    width="256"
                    height="332"
                    decoding="async"
                    data-nimg="1"
                    srcSet="https://thirdweb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-onchain.e6e41e75.png&w=256&q=75"
                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-frontend.6fd9c495.png&amp;w=640&amp;q=75"
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Banner;
