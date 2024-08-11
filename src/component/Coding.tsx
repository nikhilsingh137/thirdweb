import React from "react";
import Style from "./coding.module.scss";

const Coding = () => {
  return (
    <div className={Style.coding}>
      <div className={Style.wrapper}>
        <div className={Style.heading}>
          <h2>Simple</h2>
          <h3>Web3 made easy.</h3>
        </div>
        <div className={Style.content}>
          <div className={Style.withoutThirdWeb}>
            <div className={Style.header}>
              <h2>Without thirdweb (88 lines)</h2>
            </div>
            <div className={Style.codecontainer}>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>1</span>
                <span className={Style.tokenComment}>
                  (// Fetch all nfts from a erc721 contract on polygon.//)
                </span>
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>2</span>
                <span
                  className={Style.tokenKeyword}
                  style={{ color: "blue", fontSize: "16px" }}
                >
                  import
                </span>
                {"  "}
                <span className={Style.tokenPunctuation}>BigNumber</span>{" "}
                <span className={Style.tokenKeyword}>from</span>{" "}
                <span className={Style.tokenString} style={{ color: "brown" }}>
                  "ethers"
                </span>
                ;
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>3</span>
                <span className={Style.tokenKeyword}>const</span>{" "}
                <span className={Style.tokenVariable}>provider</span>{" "}
                <span className={Style.tokenOperator}>=</span>{" "}
                <span className={Style.tokenFunction}>
                  ethers.providers.getDefaultProvider
                </span>
                (
                <span className={Style.tokenString} style={{ color: "brown" }}>
                  "https://polygon-rpc.com/"
                </span>
                );
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>4</span>
                <span className={Style.tokenKeyword}>const</span>{" "}
                <span className={Style.tokenVariable}>contractAddress</span>{" "}
                <span className={Style.tokenOperator}>=</span>{" "}
                <span className={Style.tokenString}>"0x..."</span>;
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>5</span>
                <span className={Style.tokenComment}>
                  (// copy pasted from etherscan or contract project)
                </span>
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>6</span>
                <span className={Style.tokenKeyword}>const</span>{" "}
                <span className={Style.tokenVariable}>contractAbi</span>{" "}
                <span className={Style.tokenOperator}>=</span> [{" "}
                <span className={Style.tokenPunctuation}>...</span> ];
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>7</span>
                <span className={Style.tokenComment}>
                  (// Fetch all nfts from a erc721 contract on polygon.//)
                </span>
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>8</span>
                <span
                  className={Style.tokenKeyword}
                  style={{ color: "blue", fontSize: "16px" }}
                >
                  import
                </span>
                {"  "}
                <span className={Style.tokenPunctuation}>BigNumber</span>{" "}
                <span className={Style.tokenKeyword}>from</span>{" "}
                <span className={Style.tokenString} style={{ color: "brown" }}>
                  "ethers"
                </span>
                ;
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>9</span>
                <span className={Style.tokenKeyword}>const</span>{" "}
                <span className={Style.tokenVariable}>provider</span>{" "}
                <span className={Style.tokenOperator}>=</span>{" "}
                <span className={Style.tokenFunction}>
                  ethers.providers.getDefaultProvider
                </span>
                (
                <span className={Style.tokenString} style={{ color: "brown" }}>
                  "https://polygon-rpc.com/"
                </span>
                );
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>10</span>
                <span className={Style.tokenKeyword}>const</span>{" "}
                <span className={Style.tokenVariable}>contractAddress</span>{" "}
                <span className={Style.tokenOperator}>=</span>{" "}
                <span className={Style.tokenString}>"0x..."</span>;
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>11</span>
                <span className={Style.tokenComment}>
                  (// copy pasted from etherscan or contract project)
                </span>
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>12</span>
                <span className={Style.tokenKeyword}>const</span>{" "}
                <span className={Style.tokenVariable}>contractAbi</span>{" "}
                <span className={Style.tokenOperator}>=</span> [{" "}
                <span className={Style.tokenPunctuation}>...</span> ];
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>1</span>
                <span className={Style.tokenComment}>
                  (// Fetch all nfts from a erc721 contract on polygon.//)
                </span>
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>2</span>
                <span
                  className={Style.tokenKeyword}
                  style={{ color: "blue", fontSize: "16px" }}
                >
                  import
                </span>
                {"  "}
                <span className={Style.tokenPunctuation}>BigNumber</span>{" "}
                <span className={Style.tokenKeyword}>from</span>{" "}
                <span className={Style.tokenString} style={{ color: "brown" }}>
                  "ethers"
                </span>
                ;
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>3</span>
                <span className={Style.tokenKeyword}>const</span>{" "}
                <span className={Style.tokenVariable}>provider</span>{" "}
                <span className={Style.tokenOperator}>=</span>{" "}
                <span className={Style.tokenFunction}>
                  ethers.providers.getDefaultProvider
                </span>
                (
                <span className={Style.tokenString} style={{ color: "brown" }}>
                  "https://polygon-rpc.com/"
                </span>
                );
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>4</span>
                <span className={Style.tokenKeyword}>const</span>{" "}
                <span className={Style.tokenVariable}>contractAddress</span>{" "}
                <span className={Style.tokenOperator}>=</span>{" "}
                <span className={Style.tokenString}>"0x..."</span>;
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>5</span>
                <span className={Style.tokenComment}>
                  (// copy pasted from etherscan or contract project)
                </span>
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>6</span>
                <span className={Style.tokenKeyword}>const</span>{" "}
                <span className={Style.tokenVariable}>contractAbi</span>{" "}
                <span className={Style.tokenOperator}>=</span> [{" "}
                <span className={Style.tokenPunctuation}>...</span> ];
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>1</span>
                <span className={Style.tokenComment}>
                  (// Fetch all nfts from a erc721 contract on polygon.//)
                </span>
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>2</span>
                <span
                  className={Style.tokenKeyword}
                  style={{ color: "blue", fontSize: "16px" }}
                >
                  import
                </span>
                {"  "}
                <span className={Style.tokenPunctuation}>BigNumber</span>{" "}
                <span className={Style.tokenKeyword}>from</span>{" "}
                <span className={Style.tokenString} style={{ color: "brown" }}>
                  "ethers"
                </span>
                ;
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>3</span>
                <span className={Style.tokenKeyword}>const</span>{" "}
                <span className={Style.tokenVariable}>provider</span>{" "}
                <span className={Style.tokenOperator}>=</span>{" "}
                <span className={Style.tokenFunction}>
                  ethers.providers.getDefaultProvider
                </span>
                (
                <span className={Style.tokenString} style={{ color: "brown" }}>
                  "https://polygon-rpc.com/"
                </span>
                );
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>4</span>
                <span className={Style.tokenKeyword}>const</span>{" "}
                <span className={Style.tokenVariable}>contractAddress</span>{" "}
                <span className={Style.tokenOperator}>=</span>{" "}
                <span className={Style.tokenString}>"0x..."</span>;
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>5</span>
                <span className={Style.tokenComment}>
                  (// copy pasted from etherscan or contract project)
                </span>
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>6</span>
                <span className={Style.tokenKeyword}>const</span>{" "}
                <span className={Style.tokenVariable}>contractAbi</span>{" "}
                <span className={Style.tokenOperator}>=</span> [{" "}
                <span className={Style.tokenPunctuation}>...</span> ];
              </div>
            </div>
          </div>
          <div className={Style.withoutThirdWeb}>
            <div className={Style.header}>
              <h2>With thirdweb (7 lines)</h2>
            </div>
            <div className={Style.codecontainer}>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>1</span>
                <span className={Style.tokenComment}>
                  (// Fetch all nfts from a erc721 contract on polygon.//)
                </span>
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>2</span>
                <span
                  className={Style.tokenKeyword}
                  style={{ color: "blue", fontSize: "16px" }}
                >
                  import
                </span>
                {"  "}
                <span className={Style.tokenPunctuation}>BigNumber</span>{" "}
                <span className={Style.tokenKeyword}>from</span>{" "}
                <span className={Style.tokenString} style={{ color: "brown" }}>
                  "ethers"
                </span>
                ;
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>3</span>
                <span className={Style.tokenKeyword}>const</span>{" "}
                <span className={Style.tokenVariable}>provider</span>{" "}
                <span className={Style.tokenOperator}>=</span>{" "}
                <span className={Style.tokenFunction}>
                  ethers.providers.getDefaultProvider
                </span>
                (
                <span className={Style.tokenString} style={{ color: "brown" }}>
                  "https://polygon-rpc.com/"
                </span>
                );
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>4</span>
                <span className={Style.tokenKeyword}>const</span>{" "}
                <span className={Style.tokenVariable}>contractAddress</span>{" "}
                <span className={Style.tokenOperator}>=</span>{" "}
                <span className={Style.tokenString}>"0x..."</span>;
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>5</span>
                <span className={Style.tokenComment}>
                  (// copy pasted from etherscan or contract project)
                </span>
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>6</span>
                <span className={Style.tokenKeyword}>const</span>{" "}
                <span className={Style.tokenVariable}>contractAbi</span>{" "}
                <span className={Style.tokenOperator}>=</span> [{" "}
                <span className={Style.tokenPunctuation}>...</span> ];
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>7</span>
                <span className={Style.tokenComment}>
                  (// Fetch all nfts from a erc721 contract on polygon.//)
                </span>
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>8</span>
                <span
                  className={Style.tokenKeyword}
                  style={{ color: "blue", fontSize: "16px" }}
                >
                  import
                </span>
                {"  "}
                <span className={Style.tokenPunctuation}>BigNumber</span>{" "}
                <span className={Style.tokenKeyword}>from</span>{" "}
                <span className={Style.tokenString} style={{ color: "brown" }}>
                  "ethers"
                </span>
                ;
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>9</span>
                <span className={Style.tokenKeyword}>const</span>{" "}
                <span className={Style.tokenVariable}>provider</span>{" "}
                <span className={Style.tokenOperator}>=</span>{" "}
                <span className={Style.tokenFunction}>
                  ethers.providers.getDefaultProvider
                </span>
                (
                <span className={Style.tokenString} style={{ color: "brown" }}>
                  "https://polygon-rpc.com/"
                </span>
                );
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>10</span>
                <span className={Style.tokenKeyword}>const</span>{" "}
                <span className={Style.tokenVariable}>contractAddress</span>{" "}
                <span className={Style.tokenOperator}>=</span>{" "}
                <span className={Style.tokenString}>"0x..."</span>;
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>11</span>
                <span className={Style.tokenComment}>
                  (// copy pasted from etherscan or contract project)
                </span>
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>12</span>
                <span className={Style.tokenKeyword}>const</span>{" "}
                <span className={Style.tokenVariable}>contractAbi</span>{" "}
                <span className={Style.tokenOperator}>=</span> [{" "}
                <span className={Style.tokenPunctuation}>...</span> ];
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>1</span>
                <span className={Style.tokenComment}>
                  (// Fetch all nfts from a erc721 contract on polygon.//)
                </span>
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>2</span>
                <span
                  className={Style.tokenKeyword}
                  style={{ color: "blue", fontSize: "16px" }}
                >
                  import
                </span>
                {"  "}
                <span className={Style.tokenPunctuation}>BigNumber</span>{" "}
                <span className={Style.tokenKeyword}>from</span>{" "}
                <span className={Style.tokenString} style={{ color: "brown" }}>
                  "ethers"
                </span>
                ;
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>3</span>
                <span className={Style.tokenKeyword}>const</span>{" "}
                <span className={Style.tokenVariable}>provider</span>{" "}
                <span className={Style.tokenOperator}>=</span>{" "}
                <span className={Style.tokenFunction}>
                  ethers.providers.getDefaultProvider
                </span>
                (
                <span className={Style.tokenString} style={{ color: "brown" }}>
                  "https://polygon-rpc.com/"
                </span>
                );
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>4</span>
                <span className={Style.tokenKeyword}>const</span>{" "}
                <span className={Style.tokenVariable}>contractAddress</span>{" "}
                <span className={Style.tokenOperator}>=</span>{" "}
                <span className={Style.tokenString}>"0x..."</span>;
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>5</span>
                <span className={Style.tokenComment}>
                  (// copy pasted from etherscan or contract project)
                </span>
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>6</span>
                <span className={Style.tokenKeyword}>const</span>{" "}
                <span className={Style.tokenVariable}>contractAbi</span>{" "}
                <span className={Style.tokenOperator}>=</span> [{" "}
                <span className={Style.tokenPunctuation}>...</span> ];
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>1</span>
                <span className={Style.tokenComment}>
                  (// Fetch all nfts from a erc721 contract on polygon.//)
                </span>
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>2</span>
                <span
                  className={Style.tokenKeyword}
                  style={{ color: "blue", fontSize: "16px" }}
                >
                  import
                </span>
                {"  "}
                <span className={Style.tokenPunctuation}>BigNumber</span>{" "}
                <span className={Style.tokenKeyword}>from</span>{" "}
                <span className={Style.tokenString} style={{ color: "brown" }}>
                  "ethers"
                </span>
                ;
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>3</span>
                <span className={Style.tokenKeyword}>const</span>{" "}
                <span className={Style.tokenVariable}>provider</span>{" "}
                <span className={Style.tokenOperator}>=</span>{" "}
                <span className={Style.tokenFunction}>
                  ethers.providers.getDefaultProvider
                </span>
                (
                <span className={Style.tokenString} style={{ color: "brown" }}>
                  "https://polygon-rpc.com/"
                </span>
                );
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>4</span>
                <span className={Style.tokenKeyword}>const</span>{" "}
                <span className={Style.tokenVariable}>contractAddress</span>{" "}
                <span className={Style.tokenOperator}>=</span>{" "}
                <span className={Style.tokenString}>"0x..."</span>;
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>5</span>
                <span className={Style.tokenComment}>
                  (// copy pasted from etherscan or contract project)
                </span>
              </div>
              <div className={Style.tokenLine}>
                <span className={Style.lineNumber}>6</span>
                <span className={Style.tokenKeyword}>const</span>{" "}
                <span className={Style.tokenVariable}>contractAbi</span>{" "}
                <span className={Style.tokenOperator}>=</span> [{" "}
                <span className={Style.tokenPunctuation}>...</span> ];
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coding;
