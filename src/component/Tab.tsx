import React, { useEffect, useState } from "react";
import Style from "./tab.module.scss";
import { fetchTab } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Tab = () => {
  const [active, setActive] = useState<number>(1);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchTab());
  }, [dispatch]);

  const tabs = data.tabData?.Tab ?? [];
  return (
    <div className={Style.container}>
      <div className={Style.item}>
        {data.tabData?.Tab &&
          data.tabData.Tab.map((item, index) => {
            return (
              <>
                <h2
                  onClick={() => setActive(item.id)}
                  className={active === item.id ? Style.active : ""}
                >
                  {item.id}
                </h2>
                {index < tabs.length - 1 && (
                  <div
                    className={`${Style.borderLine} ${
                      active > tabs[index].id ? Style.activeLine : ""
                    }`}
                  ></div>
                )}
              </>
            );
          })}
      </div>
      <div className={Style.content}>
        {data.tabData?.Tab &&
          data.tabData.Tab.map((item) => {
            return (
              <span className={active === item.id ? Style.active : ""}>
                <img src={item.img} alt="" />
                <div className={Style.text}>
                  <p>{item.paragraph}</p>
                </div>
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default Tab;
