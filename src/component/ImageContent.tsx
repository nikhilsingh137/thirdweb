import React, { useEffect } from "react";
import Style from "./imaagecontent.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchImage } from "../redux/Slice";
const ImageContent = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchImage());
  }, [dispatch]);
  return (
    <div className={Style.imaagecontent}>
      <div className={Style.content}>
        {data.imageData?.image &&
          data.imageData.image.map((item) => {
            return (
              <>
                {item.img1 &&
                  item.img1.map((item) => {
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
  );
};

export default ImageContent;
