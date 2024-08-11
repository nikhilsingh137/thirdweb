import React, { useEffect } from "react";
import Style from "./imagebox.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchImage } from "../redux/Slice";
import ImageContent from "./ImageContent";

const Imagebox = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchImage());
  }, [dispatch]);
  return (
    <div className={Style.imageboxTop}>
      <div className={Style.imagebox}>
        <div className={Style.image}>
          {data.imageData?.image &&
            data.imageData.image.map((item) => {
              return (
                <>
                  {item.img &&
                    item.img.map((item) => {
                      return (
                        <span>
                          <img src={item} alt="" />
                        </span>
                      );
                    })}
                </>
              );
            })}
        </div>
      </div>
      <ImageContent />
    </div>
  );
};

export default Imagebox;
