import React from "react";
import icon from "../assets/icon.png";
import arrow from "../assets/Arrows-right-left.png";
import wallet from "../assets/wallet.png";
import wallet1 from "../assets/wallet1.png";
import Token from "../assets/scan-coin.png";
import Frame from "../assets/Frame.png";
import copy from "../assets/copy.png";
import eye from "../assets/eye.png";

const TransactionTable = () => {
  const transactions = [
    {
      id: "0xa91172edd1dbeac...",
      type: "trade",
      from: "0xc2eB5...f5Dec7ab5",
      to: "0xc2eB5...f5Dec7ab5",
      token: 50,
      fees: 0.00203338,
      description: "Renewable Energy",
    },
    {
      id: "0xa91172edd1d5caa...",
      type: "offset",
      from: "0xc2eB5...f5Dec7ab5",
      to: "0xc2eB5...f5Dec7ab5",
      token: 75,
      fees: 0.00203338,
      description: "Afforestation",
    },
    {
      id: "0xa9117d1dbeac5ca...",
      type: "offset",
      from: "0xc2eB5...f5Dec7ab5",
      to: "0xc2eB5...f5Dec7ab5",
      token: 100,
      fees: 0.00203338,
      description: "Carbon Capture",
    },
    {
        id: "0xa91172edd1dbeac...",
        type: "trade",
        from: "0xc2eB5...f5Dec7ab5",
        to: "0xc2eB5...f5Dec7ab5",
        token: 50,
        fees: 0.00203338,
        description: "Renewable Energy",
      },
      {
        id: "0xa91172edd1dbeac...",
        type: "trade",
        from: "0xc2eB5...f5Dec7ab5",
        to: "0xc2eB5...f5Dec7ab5",
        token: 50,
        fees: 0.00203338,
        description: "Renewable Energy",
      },
  ];

  return (
    <div className="container mx-auto mt-4">
      <div className="overflow-x-auto rounded-2xl">
        <table className="min-w-full text-left text-sm ">
          <thead className="bg-gray-900 text-white  ">
            <tr className="">
              <th className="p-3 relative">
                <img src={icon} alt="" className=" w-5 absolute" /> 
                <p className="pl-7">TransactionID</p>
                </th>
              <th className="p-3 relative">
              <img src={arrow} alt="" className=" w-5 absolute" /> 
              <p className="pl-7">Type</p>
                
                </th>
                <th className="p-3 relative">
              <img src={wallet} alt="" className=" w-5 absolute" /> 
              <p className="pl-7">From</p>
                
                </th>
                <th className="p-3 relative">
              <img src={wallet1} alt="" className=" w-5 absolute" /> 
              <p className="pl-7">To</p>
                
                </th>
                <th className="p-3 relative">
              <img src={Token} alt="" className=" w-5 absolute" /> 
              <p className="pl-7">Token</p>
                
                </th>
                <th className="p-3 relative">
              <img src={Frame} alt="" className=" w-5 absolute" /> 
              <p className="pl-7">Tnx Fees</p>
                
                </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className="border">
                <td className="p-3 border ">{transaction.id}
                  <span className="">
                      <img src={copy} alt="" className="w-5 h-5" />
                  </span>
                </td>
                <td className="p-3 border">{transaction.type}</td>
                <td className="p-3 border">{transaction.from}
                <span className="">
                      <img src={copy} alt="" className="w-5 h-5" />
                  </span>
                </td>
                <td className="p-3 border">{transaction.to}
                <span className="">
                      <img src={copy} alt="" className="w-5 h-5" />
                  </span>
                </td>
                <td className="p-3 border">{transaction.token}</td>
                <td className="p-3 border ">{transaction.fees}
                  <span className="">
                      <img src={eye} alt="" className="w-5 h-5" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
