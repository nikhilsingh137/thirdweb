import React, { useEffect, useState } from "react";
import Style from "./header.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchHeader } from "../redux/Slice";
import HdLogo from "../img/thirdweb-removebg-preview.png";
import Sidebar from "./Sidebar";
import StickyBox from "react-sticky-box";

const Header = () => {
  const [line, setLine] = useState(0);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchHeader());
  }, [dispatch]);

  const handleSide = () => {
    const sidebar: any = document.getElementById("sidebar");
    const overlay: any = document.getElementById("overlay");
    if (sidebar || overlay) {
      sidebar.style.width = "250px";
      overlay.style.width = "100%";
      document.body.style.overflow = "hidden";
    }
  };

  const handleHide = () => {
    const sidebar: any = document.getElementById("sidebar");
    const overlay: any = document.getElementById("overlay");
    if (sidebar || overlay) {
      sidebar.style.width = "0px";
      overlay.style.width = "0%";
      document.body.style.overflow = "";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const line = (scrolled / documentHeight) * 100;
      setLine(line);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <StickyBox className={Style.sticky}>
        <div className={Style.header}>
          <div className={Style.sidebar} id="sidebar">
            <Sidebar />
          </div>
          <div
            className={Style.overlay}
            id="overlay"
            onClick={handleHide}
          ></div>

          <div className={Style.wrapper}>
            <div className={Style.logo}>
              <img src={HdLogo} alt="" />
            </div>
            <div className={Style.navbar}>
              <ul>
                {data.headerData?.header &&
                  data.headerData.header.map((item, index) => {
                    return (
                      <li>
                        <a href={item.url}>{item.titel}</a>
                        {(item.id === "1" ||
                          item.id === "2" ||
                          item.id === "4" ||
                          item.id === "5") &&
                          item.subTitle && (
                            <>
                              <div className={Style.dropdown}>
                                <ul>
                                  {item.subMenu &&
                                    item.subMenu.map((item) => {
                                      return (
                                        <li>
                                          <a href={item.url}>
                                            <span>
                                              <img src={item.img} alt="" />
                                            </span>
                                            <h2>
                                              {item.title}
                                              <br />
                                              <strong>{item.paragraph}</strong>
                                            </h2>
                                          </a>
                                        </li>
                                      );
                                    })}
                                </ul>
                              </div>
                            </>
                          )}
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className={Style.ShowIcon} onClick={handleSide}>
              ≡
            </div>
          </div>
          <div className={Style.borderLine} style={{ width: `${line}%` }}></div>
        </div>
      </StickyBox>
    </>
  );
};

export default Header;
