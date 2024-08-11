import React, { useEffect } from "react";
import Style from "./sidebar.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchHeader } from "../redux/Slice";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchHeader());
  }, [dispatch]);
  return (
    <>
      <ul className={Style.unit}>
        {data.headerData?.header &&
          data.headerData.header.map((item) => {
            return (
              <li>
                <a href={item.url}>{item.titel}</a>
              </li>
            );
          })}
      </ul>
      <div className={Style.overlay}></div>
    </>
  );
};

export default Sidebar;
